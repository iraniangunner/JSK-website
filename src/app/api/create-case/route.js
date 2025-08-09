export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("resume_file");
  const variables = JSON.parse(formData.get("variables"));
  const taskId = formData.get("taskId");
  const processId = formData.get("processId");
  const triggerId = formData.get("triggerId");
  const docId = formData.get("docId");
  const docComment = formData.get("docComment");

  // 2. گرفتن access token (همون کد توی توکن)
  const form = new URLSearchParams({
    grant_type: "password",
    client_id: process.env.PM_CLIENT_ID,
    client_secret: process.env.PM_CLIENT_SECRET,
    username: process.env.PM_USERNAME,
    password: process.env.PM_PASSWORD,
    scope: "*",
  });

  const tokenRes = await fetch(
    `${process.env.PM_BASE_URL}/${process.env.PM_WORKSPACE}/oauth2/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    }
  );

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    return new Response(
      JSON.stringify({ error: "گرفتن توکن شکست خورد", details: errText }),
      { status: 401 }
    );
  }

  const { access_token } = await tokenRes.json();

  // 3. ساخت کیس جدید
  const caseRes = await fetch(
    `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pro_uid: processId,
        tas_uid: taskId,
        variables: variables,
      }),
    }
  );

  if (!caseRes.ok) {
    const errText = await caseRes.text();
    return new Response(
      JSON.stringify({ error: "ایجاد Case شکست خورد", details: errText }),
      {
        status: caseRes.status,
      }
    );
  }

  const caseData = await caseRes.json();
  const app_uid = caseData.app_uid;

  //4. آپلود فایل به صورت FormData
  if (file) {
    const uploadForm = new FormData();
    uploadForm.append("tas_uid", taskId); 
    uploadForm.append("inp_doc_uid", docId); 
    uploadForm.append("form", file);
    uploadForm.append("app_doc_comment", docComment);

    const uploadRes = await fetch(
      `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/input-document`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: uploadForm,
      }
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      return new Response(
        JSON.stringify({ error: "آپلود فایل شکست خورد", details: errText }),
        {
          status: uploadRes.status,
        }
      );
    }
  }

  // 5. اجرای تریگر (در صورت وجود)
  if (triggerId) {
    const triggerRes = await fetch(
      `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/execute-trigger/${triggerId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!triggerRes.ok) {
      const errText = await triggerRes.text();
      return new Response(
        JSON.stringify({ error: "اجرای تریگر شکست خورد", details: errText }),
        {
          status: triggerRes.status,
        }
      );
    }
  }

  // 6. ارسال کیس به تسک بعدی
  const routeRes = await fetch(
    `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/route-case`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!routeRes.ok) {
    const errText = await routeRes.text();
    return new Response(
      JSON.stringify({
        error: "ارسال خودکار به تسک بعدی شکست خورد",
        details: errText,
      }),
      {
        status: routeRes.status,
      }
    );
  }

  // جواب موفقیت‌آمیز
  return new Response(
    JSON.stringify({ ...caseData, trigger: "executed", routed: true }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
