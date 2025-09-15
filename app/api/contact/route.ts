import { type NextRequest, NextResponse } from "next/server"
import { createContactSubmission } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const submission = await createContactSubmission({
      ...contactData,
      status: "new",
    })

    return NextResponse.json(submission, { status: 201 })
  } catch (error) {
    console.error("Error creating contact submission:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
