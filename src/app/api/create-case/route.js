// app/api/pm-simple-case/route.js
export async function POST(req) {
    const { processId, taskId, triggerId, variables } = await req.json();
  
    // مرحله 1: گرفتن access token
    const form = new URLSearchParams({
      grant_type: 'password',
      client_id: process.env.PM_CLIENT_ID,
      client_secret: process.env.PM_CLIENT_SECRET,
      username: process.env.PM_USERNAME,
      password: process.env.PM_PASSWORD,
      scope: '*',
    });
  
    const tokenRes = await fetch(`${process.env.PM_BASE_URL}/${process.env.PM_WORKSPACE}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    });
  
    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      return new Response(JSON.stringify({ error: 'گرفتن توکن شکست خورد', details: errText }), { status: 401 });
    }
  
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
  
    // مرحله 2: ساختن Case جدید
    const caseRes = await fetch(`${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pro_uid: processId,
        tas_uid: taskId,
        variables: variables,
      }),
    });
  
    if (!caseRes.ok) {
      const errText = await caseRes.text();
      return new Response(JSON.stringify({ error: 'ایجاد Case شکست خورد', details: errText }), {
        status: caseRes.status,
      });
    }
  
    const caseData = await caseRes.json();
    const app_uid = caseData.app_uid;
  
    // مرحله 3: اجرای تریگر (در صورت نیاز)
    if (triggerId) {
      const triggerRes = await fetch(`${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/execute-trigger/${triggerId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!triggerRes.ok) {
        const errText = await triggerRes.text();
        return new Response(JSON.stringify({ error: 'اجرای تریگر شکست خورد', details: errText }), {
          status: triggerRes.status,
        });
      }
    }
  
    // مرحله 4: ارسال Case به تسک بعدی
    const routeRes = await fetch(`${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/route-case`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  
    if (!routeRes.ok) {
      const errText = await routeRes.text();
      return new Response(JSON.stringify({ error: 'ارسال خودکار به تسک بعدی شکست خورد', details: errText }), {
        status: routeRes.status,
      });
    }
  
    return new Response(JSON.stringify({ ...caseData, trigger: 'executed', routed: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  