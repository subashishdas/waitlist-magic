import { connectDB } from "@/lib/mongoDB";
import { sendMail } from "@/lib/nodemailer";
import { zodSchema } from "@/lib/zodSchema";
import WaitlistUser from "@/model/WaitlistUser";
import { confirmationEmail } from "@/utils/confirmationEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    await connectDB();

    const payload = await req.json();

    const validationSchema = zodSchema.pick({ email: true });
    const validatedData = validationSchema.safeParse(payload);

    if (!validatedData.success) {
      console.log(validatedData.error);
      return NextResponse.json(
        {
          message: "Invalid Email",
        },
        { status: 400 }
      );
    }

    const { email, referredBy } = validatedData.data;

    const existingUser = await WaitlistUser.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Already on the waitlist",
        },
        { status: 409 }
      );
    }

    const referralCode = `${email.split("@")[0]}-${Math.floor(
      Math.random() * 1000
    )}`;

    const referralLink = `${baseUrl}/?ref=${referralCode}`;

    const emailResponse = await sendMail(
      "Confirmation Mail",
      email,
      confirmationEmail(referralLink)
    );

    if (!emailResponse.success) {
      console.log(emailResponse.message);
      return NextResponse.json(
        {
          message: "Failed to send email",
        },
        { status: 500 }
      );
    }

    const newUser = await WaitlistUser.create({
      email,
      referralCode,
      referredBy: referredBy || null,
    });

    return NextResponse.json(
      {
        message: "Added to the waitlist",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
