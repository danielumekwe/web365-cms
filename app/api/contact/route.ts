import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const lead = await prisma.contactLead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@web365ng.com",

      subject: "New Website Lead",

      html: `
      <h2>New Contact Lead</h2>

      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Phone:</b> ${body.phone}</p>
      <p><b>Service:</b> ${body.service}</p>
      <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      lead,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error,
    });

  }

}
