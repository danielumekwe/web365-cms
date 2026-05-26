import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, service, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Web365 Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "info@web365ng.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Website Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Service Needed:</strong> ${service || "-"}</p>
        <p><strong>Project Details:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}