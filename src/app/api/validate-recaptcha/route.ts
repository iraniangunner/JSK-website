import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    const secret = process.env.CAPTCHA_SECRET_KEY; // Add your reCAPTCHA secret key
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: result["error-codes"] || "Invalid reCAPTCHA" },
        { status: 400 }
      );
    }
  } catch (error) {
    let errorMessage = "An unknown error occurred";

    // Handle the error type
    if (error instanceof Error) {
      errorMessage = error.message; // Access the `message` property
    }

    console.error("Error validating reCAPTCHA:", error);

    return NextResponse.json(
      { error: "Internal Server Error", details: errorMessage },
      { status: 500 }
    );
  }
}
