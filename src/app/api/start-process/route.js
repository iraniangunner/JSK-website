export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const marital = formData.get('marital');

    // 1. دریافت access_token از طریق OAuth2
    const oauthRes = await fetch('http://79.127.63.91:85/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'password',
        client_id: '<CLIENT_ID>',             // ← جایگزین کن
        client_secret: '<CLIENT_SECRET>',     // ← جایگزین کن
        username: 'Administrator',
        password: 'fateh@654321',
        scope: '*',
      }),
    });

    const oauthData = await oauthRes.json();

    if (!oauthRes.ok || !oauthData.access_token) {
      return new Response(JSON.stringify({
        error: 'Failed to authenticate with ProcessMaker',
        detail: oauthData,
      }), { status: 401 });
    }

    const accessToken = oauthData.access_token;

    // 2. ساخت کیس جدید با استفاده از token
    const createCaseRes = await fetch('http://79.127.63.91:85/api/1.0/workflow/cases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        pro_uid: '70736694368722d0bef0141068694440',
        tas_uid: '50115966768722d4050a944041930443',
        variables: [
          { name: 'name', value: name },
          { name: 'email', value: email },
          { name: 'marital', value: marital },
        ],
      }),
    });

    const caseData = await createCaseRes.json();

    if (!createCaseRes.ok) {
      return new Response(JSON.stringify({
        error: 'Case creation failed',
        details: caseData,
      }), { status: 500 });
    }

    return new Response(JSON.stringify({
      message: 'Case created successfully',
      caseId: caseData.app_uid,
    }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({
      error: 'Unexpected server error',
      details: err.message,
    }), { status: 500 });
  }
}
