import { type NextRequest, NextResponse } from "next/server"
import { getProjectMessages, createMessage } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const projectId = Number.parseInt(params.id)
    const messages = await getProjectMessages(projectId)
    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const projectId = Number.parseInt(params.id)
    const messageData = await request.json()

    if (!messageData.senderId || !messageData.recipientId || !messageData.message) {
      return NextResponse.json({ error: "Sender, recipient, and message are required" }, { status: 400 })
    }

    const message = await createMessage({
      projectId,
      ...messageData,
      isRead: false,
    })

    return NextResponse.json(message, { status: 201 })
  } catch (error) {
    console.error("Error creating message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
