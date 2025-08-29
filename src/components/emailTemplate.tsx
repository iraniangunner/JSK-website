import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  locale: string;
}

export function EmailTemplate({ firstName, locale }: EmailTemplateProps) {
  const isFa = locale === "fa";

  const greeting = isFa ? `👋 سلام ${firstName}` : `Hello ${firstName} 👋`;
  const bodyText = isFa
    ? "خوشحالیم که به تیم ما علاقه‌مند شدید. درخواست شما با موفقیت ثبت شد و به‌زودی بررسی خواهد شد"
    : "We’re excited that you’re interested in joining our team. Your application has been successfully submitted, and our team will contact you soon.";

  return (
    <html>
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}>
          <tr>
            <td align="center">
              <table width="600" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e0e0e0", padding: "30px" }}>
                {/* Logo */}
                <tr>
                  <td align="center" style={{ paddingBottom: "20px" }}>
                    <img src="https://jsk-co.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjsk.7562ac2d.png&w=256&q=75" alt="Company Logo" width={150} style={{ display: "block", border: "1px solid #ddd" }} />
                  </td>
                </tr>

                {/* Greeting */}
                <tr>
                  <td style={{ textAlign: "center", paddingBottom: "20px" }}>
                    <h1 style={{ fontSize: "24px", color: "#4f46e5", margin: "0 0 10px 0" }}>{greeting}</h1>
                    <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: "24px", margin: 0 }}>{bodyText}</p>
                  </td>
                </tr>

                {/* Divider */}
                <tr>
                  <td>
                    <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "20px 0" }} />
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
                      © {new Date().getFullYear()} ژیوار صنعت کیان. {isFa ? "همه حقوق محفوظ است." : "All rights reserved."}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
