import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const CONTACT_EMAIL = "thepantonecolors@gmail.com";

export const sendInquiryEmail = createServerFn({ method: "POST" })
  .validator((data: InquiryPayload) => data)
  .handler(async ({ data }) => {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: "Thepantonecolors Inquiry <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        replyTo: data.email,
        subject: `New Inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 3px solid #06b6d4; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 22px;">New Inquiry Received</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Submitted via Thepantonecolors website</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0; color: #0f172a;">${data.company || "N/A"}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
              <h3 style="color: #334155; margin: 0 0 8px 0; font-size: 15px;">Message:</h3>
              <p style="white-space: pre-wrap; color: #1e293b; margin: 0; font-size: 14px; line-height: 1.6;">${data.message}</p>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              Hit "Reply" in your email client to respond directly to ${data.email}.
            </p>
          </div>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }
      return { success: true, provider: "resend" };
    }

    // Fallback to FormSubmit direct POST if RESEND_API_KEY is not set
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://thepantonecolors.vercel.app",
        Origin: "https://thepantonecolors.vercel.app",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company || "N/A",
        message: data.message,
        _subject: `New Inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        _template: "table",
      }),
    });

    const responseData = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };

    if (responseData.success === "false" || responseData.success === false || !res.ok) {
      throw new Error(
        responseData.message || "Failed to deliver inquiry email. Please try again later.",
      );
    }

    return { success: true, provider: "formsubmit" };
  });
