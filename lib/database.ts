// This file provides a centralized way to interact with the database

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  phone?: string
  company?: string
  role: "client" | "admin" | "consultant"
  createdAt: string
  updatedAt: string
}

export interface Lead {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  businessType?: string
  industry?: string
  businessStage?: string
  employees?: string
  services: string[]
  timeline?: string
  budget?: string
  fundingAmount?: string
  fundingPurpose?: string
  specialRequirements?: string
  hearAboutUs?: string
  status: "new" | "contacted" | "qualified" | "proposal-sent" | "converted" | "lost"
  source: string
  assignedTo?: number
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: number
  clientId: number
  leadId?: number
  name: string
  description?: string
  serviceType: string
  status: "planning" | "in-progress" | "review" | "completed" | "cancelled"
  progress: number
  assignedConsultant?: number
  startDate?: string
  dueDate?: string
  completedDate?: string
  totalValue?: number
  createdAt: string
  updatedAt: string
}

export interface ProjectMilestone {
  id: number
  projectId: number
  name: string
  description?: string
  status: "pending" | "in-progress" | "completed"
  dueDate?: string
  completedDate?: string
  orderIndex: number
  createdAt: string
  updatedAt: string
}

export interface Document {
  id: number
  projectId: number
  name: string
  filePath?: string
  fileSize?: number
  fileType?: string
  documentType?: string
  uploadedBy?: number
  isClientVisible: boolean
  createdAt: string
  updatedAt: string
}

export interface Message {
  id: number
  projectId: number
  senderId: number
  recipientId: number
  message: string
  isRead: boolean
  createdAt: string
}

export interface Feedback {
  id: number
  projectId: number
  clientId: number
  satisfactionRating?: number
  feedbackText?: string
  suggestions?: string
  wouldRecommend?: boolean
  createdAt: string
}

export interface ContactSubmission {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  timeline?: string
  budget?: string
  message: string
  status: "new" | "responded" | "converted"
  createdAt: string
}

// Database query functions would be implemented here
// For now, these are placeholder functions that would connect to your actual database

export async function createLead(leadData: Omit<Lead, "id" | "createdAt" | "updatedAt">): Promise<Lead> {
  // Implementation would insert lead into database
  console.log("Creating lead:", leadData)
  return {
    id: Date.now(),
    ...leadData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

export async function createContactSubmission(
  contactData: Omit<ContactSubmission, "id" | "createdAt">,
): Promise<ContactSubmission> {
  // Implementation would insert contact submission into database
  console.log("Creating contact submission:", contactData)
  return {
    id: Date.now(),
    ...contactData,
    createdAt: new Date().toISOString(),
  }
}

export async function getLeads(filters?: { status?: string; assignedTo?: number }): Promise<Lead[]> {
  // Implementation would query leads from database
  console.log("Getting leads with filters:", filters)
  return []
}

export async function getProjects(filters?: { clientId?: number; status?: string }): Promise<Project[]> {
  // Implementation would query projects from database
  console.log("Getting projects with filters:", filters)
  return []
}

export async function getProjectMilestones(projectId: number): Promise<ProjectMilestone[]> {
  // Implementation would query milestones for a project
  console.log("Getting milestones for project:", projectId)
  return []
}

export async function getProjectDocuments(projectId: number): Promise<Document[]> {
  // Implementation would query documents for a project
  console.log("Getting documents for project:", projectId)
  return []
}

export async function getProjectMessages(projectId: number): Promise<Message[]> {
  // Implementation would query messages for a project
  console.log("Getting messages for project:", projectId)
  return []
}

export async function createMessage(messageData: Omit<Message, "id" | "createdAt">): Promise<Message> {
  // Implementation would insert message into database
  console.log("Creating message:", messageData)
  return {
    id: Date.now(),
    ...messageData,
    createdAt: new Date().toISOString(),
  }
}

export async function createFeedback(feedbackData: Omit<Feedback, "id" | "createdAt">): Promise<Feedback> {
  // Implementation would insert feedback into database
  console.log("Creating feedback:", feedbackData)
  return {
    id: Date.now(),
    ...feedbackData,
    createdAt: new Date().toISOString(),
  }
}

export async function updateLeadStatus(leadId: number, status: Lead["status"]): Promise<void> {
  // Implementation would update lead status in database
  console.log("Updating lead status:", leadId, status)
}

export async function updateProjectProgress(projectId: number, progress: number): Promise<void> {
  // Implementation would update project progress in database
  console.log("Updating project progress:", projectId, progress)
}
