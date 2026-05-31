import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      project,
      timeline,
      budget,
      fullName,
      email,
      phone,
      company,
      contactMethod,
      role,
      services,
    } = body;

    if (!fullName || !email || !project) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Web365 Quotes <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "info@web365ng.com"],
      replyTo: email,
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Role:</strong> ${role || "-"}</p>

        <p><strong>Preferred Contact Method:</strong> ${contactMethod || "-"}</p>

        <p><strong>Timeline:</strong> ${timeline || "-"}</p>
        <p><strong>Budget:</strong> ${budget || "-"}</p>

        <p><strong>Services Requested:</strong></p>
        <ul>
          ${
            Array.isArray(services)
              ? services.map((s) => `<li>${s}</li>`).join("")
              : "<li>None selected</li>"
          }
        </ul>

        <h3>Project Description</h3>
        <p>${project}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 }
    );
  }
}