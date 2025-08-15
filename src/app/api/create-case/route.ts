export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume_file");

    // در Node.js ممکنه File وجود نداشته باشه، پس از Blob استفاده می‌کنیم
    if (file !== null && !(file instanceof Blob)) {
      return new Response(
        JSON.stringify({ error: "resume_file باید فایل یا null باشد" }),
        { status: 400 }
      );
    }

    const variablesStr = formData.get("variables");
    if (typeof variablesStr !== "string") {
      return new Response(
        JSON.stringify({ error: "variables باید رشته JSON باشد" }),
        { status: 400 }
      );
    }
    const variables = JSON.parse(variablesStr);

    const taskId = formData.get("taskId");
    if (typeof taskId !== "string") {
      return new Response(JSON.stringify({ error: "taskId باید رشته باشد" }), {
        status: 400,
      });
    }

    const processId = formData.get("processId");
    if (typeof processId !== "string") {
      return new Response(
        JSON.stringify({ error: "processId باید رشته باشد" }),
        { status: 400 }
      );
    }

    const triggerId = formData.get("triggerId");
    if (triggerId !== null && typeof triggerId !== "string") {
      return new Response(
        JSON.stringify({ error: "triggerId باید رشته یا null باشد" }),
        { status: 400 }
      );
    }

    const docId = formData.get("docId");
    if (typeof docId !== "string") {
      return new Response(JSON.stringify({ error: "docId باید رشته باشد" }), {
        status: 400,
      });
    }

    const docComment = formData.get("docComment");
    if (typeof docComment !== "string") {
      return new Response(
        JSON.stringify({ error: "docComment باید رشته باشد" }),
        { status: 400 }
      );
    }

    // گرفتن access token
    const form = new URLSearchParams({
      grant_type: "password",
      client_id: process.env.PM_CLIENT_ID || "",
      client_secret: process.env.PM_CLIENT_SECRET || "",
      username: process.env.PM_USERNAME || "",
      password: process.env.PM_PASSWORD || "",
      scope: "*",
    });

    const tokenUrl = `${process.env.PM_BASE_URL}/${process.env.PM_WORKSPACE}/oauth2/token`;
    const tokenRes = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      console.error("Token request failed:", tokenUrl, errText);
      return new Response(
        JSON.stringify({ error: "گرفتن توکن شکست خورد", details: errText }),
        { status: 401 }
      );
    }

    const { access_token } = await tokenRes.json();

    // ساخت کیس جدید
    const caseUrl = `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases`;
    const caseRes = await fetch(caseUrl, {
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
    });

    if (!caseRes.ok) {
      const errText = await caseRes.text();
      console.error("Case creation failed:", caseUrl, errText);
      return new Response(
        JSON.stringify({ error: "ایجاد Case شکست خورد", details: errText }),
        { status: caseRes.status }
      );
    }

    const caseData = await caseRes.json();
    const app_uid = caseData.app_uid;

    // آپلود فایل
    if (file) {
      const uploadForm = new FormData();
      uploadForm.append("tas_uid", taskId);
      uploadForm.append("inp_doc_uid", docId);
      uploadForm.append("form", file);
      uploadForm.append("app_doc_comment", docComment);

      const uploadUrl = `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/input-document`;
      const uploadRes = await fetch(uploadUrl, {
        method: "POST",
        headers: { Authorization: `Bearer ${access_token}` },
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        const errText = await uploadRes.text();
        console.error("File upload failed:", uploadUrl, errText);
        return new Response(
          JSON.stringify({ error: "آپلود فایل شکست خورد", details: errText }),
          { status: uploadRes.status }
        );
      }
    }

    // اجرای تریگر
    if (triggerId) {
      const triggerUrl = `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/execute-trigger/${triggerId}`;
      const triggerRes = await fetch(triggerUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });

      if (!triggerRes.ok) {
        const errText = await triggerRes.text();
        console.error("Trigger execution failed:", triggerUrl, errText);
        return new Response(
          JSON.stringify({ error: "اجرای تریگر شکست خورد", details: errText }),
          { status: triggerRes.status }
        );
      }
    }

    // ارسال کیس به تسک بعدی
    const routeUrl = `${process.env.PM_BASE_URL}/api/1.0/${process.env.PM_WORKSPACE}/cases/${app_uid}/route-case`;
    const routeRes = await fetch(routeUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!routeRes.ok) {
      const errText = await routeRes.text();
      console.error("Case routing failed:", routeUrl, errText);
      return new Response(
        JSON.stringify({
          error: "ارسال خودکار به تسک بعدی شکست خورد",
          details: errText,
        }),
        { status: routeRes.status }
      );
    }

    // موفقیت
    return new Response(
      JSON.stringify({ ...caseData, trigger: "executed", routed: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("Unhandled error in create-case:", err);
    return new Response(
      JSON.stringify({ error: err.message, stack: err.stack }),
      { status: 500 }
    );
  }
}
