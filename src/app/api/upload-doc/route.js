export async function POST(req) {
    const formData = await req.formData();
  
    const file = formData.get("file");
    const app_uid = formData.get("app_uid");
    const tas_uid = formData.get("tas_uid");
    const inp_doc_uid = formData.get("inp_doc_uid");
    const access_token = formData.get("access_token");
    const comment = formData.get("comment") || "رزومه کاربر";
  
    const uploadForm = new FormData();
    uploadForm.append("tas_uid", tas_uid);
    uploadForm.append("inp_doc_uid", inp_doc_uid);
    uploadForm.append("form", file);
    uploadForm.append("app_doc_comment", comment);
  
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
        JSON.stringify({ error: "آپلود شکست خورد", details: errText }),
        {
          status: uploadRes.status,
        }
      );
    }
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  