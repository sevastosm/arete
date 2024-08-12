import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    // Create a transporter using environment variables
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    // Define mail options
    const mailOptions = {
      from: "olia@aretestudio.co", // Use the visitor's email address as the sender
      to: "olia@aretestudio.co",
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    // Send the email
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: unknown) {
    const errorMessage = (err as Error).message || "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
