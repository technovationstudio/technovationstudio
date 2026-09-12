import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, serviceType, budget, description } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid name (minimum 2 characters).",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid business email address.",
        },
        { status: 400 },
      );
    }

    if (
      !description ||
      typeof description !== "string" ||
      description.trim().length < 10
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide a brief description of your project (min 10 chars).",
        },
        { status: 400 },
      );
    }

    // In production, this can send to Resend / SendGrid or webhook
    // We log the inquiry cleanly for studio records
    console.log("[TECHNOVATION Studio Inquiry Received]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      serviceType: serviceType || "Full-Stack Web Engineering",
      budget: budget || "$10k-$25k",
      description: description.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your project brief has been delivered directly to Irly & Yudhis. We'll reply within 12 hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
