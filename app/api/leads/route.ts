import { type NextRequest, NextResponse } from "next/server"
import { createLead, getLeads } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const assignedTo = searchParams.get("assignedTo")

    const filters: any = {}
    if (status) filters.status = status
    if (assignedTo) filters.assignedTo = Number.parseInt(assignedTo)

    const leads = await getLeads(filters)
    return NextResponse.json(leads)
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    // Validate required fields
    if (!leadData.name || !leadData.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const lead = await createLead({
      ...leadData,
      status: "new",
      source: "website",
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}
