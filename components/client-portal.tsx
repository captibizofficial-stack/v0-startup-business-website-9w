"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  Download,
  Upload,
  MessageCircle,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Building,
  Mail,
  Phone,
} from "lucide-react"

// Mock client data
const clientInfo = {
  name: "John Smith",
  email: "john@techstart.com",
  phone: "+1 (555) 123-4567",
  company: "TechStart Solutions",
  industry: "Technology",
  projectType: "Business Plan Writing",
}

const projectDetails = {
  name: "TechStart Business Plan",
  status: "in-progress",
  progress: 75,
  startDate: "2024-01-10",
  dueDate: "2024-01-20",
  assignedConsultant: "John Doe",
  totalValue: 897,
}

const milestones = [
  { name: "Initial Consultation", status: "completed", date: "2024-01-10" },
  { name: "Market Research", status: "completed", date: "2024-01-12" },
  { name: "Financial Projections", status: "in-progress", date: "2024-01-15" },
  { name: "Draft Review", status: "pending", date: "2024-01-18" },
  { name: "Final Delivery", status: "pending", date: "2024-01-20" },
]

const documents = [
  { name: "Business Plan Draft v1.pdf", type: "draft", uploadDate: "2024-01-14", size: "2.4 MB" },
  { name: "Market Research Report.pdf", type: "research", uploadDate: "2024-01-13", size: "1.8 MB" },
  { name: "Financial Model.xlsx", type: "financial", uploadDate: "2024-01-15", size: "856 KB" },
]

const messages = [
  {
    id: 1,
    sender: "John Doe",
    role: "consultant",
    message:
      "Hi John, I've uploaded the first draft of your business plan. Please review and let me know your thoughts.",
    timestamp: "2024-01-14T10:30:00Z",
  },
  {
    id: 2,
    sender: "John Smith",
    role: "client",
    message: "Thanks! I'll review it today and get back to you with feedback.",
    timestamp: "2024-01-14T14:20:00Z",
  },
  {
    id: 3,
    sender: "John Doe",
    role: "consultant",
    message: "Perfect! I'm also working on the financial projections and should have those ready by tomorrow.",
    timestamp: "2024-01-14T16:45:00Z",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-600" />
    case "pending":
      return <AlertCircle className="h-4 w-4 text-gray-400" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

export default function ClientPortal() {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message sending
    console.log("Sending message:", newMessage)
    setNewMessage("")
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Client Portal</h1>
            <p className="text-muted-foreground">Welcome back, {clientInfo.name}</p>
          </div>
          <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
            Project: {projectDetails.status.replace("-", " ").toUpperCase()}
          </Badge>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>{projectDetails.name}</span>
              </CardTitle>
              <CardDescription>
                {projectDetails.status === "in-progress" ? "Your project is currently in progress" : "Project status"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{projectDetails.progress}%</span>
                </div>
                <Progress value={projectDetails.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Start Date:</span>
                  <div className="font-medium">{projectDetails.startDate}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Due Date:</span>
                  <div className="font-medium">{projectDetails.dueDate}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Consultant:</span>
                  <div className="font-medium">{projectDetails.assignedConsultant}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Project Value:</span>
                  <div className="font-medium">${projectDetails.totalValue}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{clientInfo.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{clientInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{clientInfo.phone}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="text-sm">
                  <span className="text-muted-foreground">Industry:</span>
                  <div className="font-medium">{clientInfo.industry}</div>
                </div>
                <div className="text-sm mt-2">
                  <span className="text-muted-foreground">Service:</span>
                  <div className="font-medium">{clientInfo.projectType}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="milestones" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Milestones Tab */}
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Project Milestones</CardTitle>
                <CardDescription>Track the progress of your project through key milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                      {getStatusIcon(milestone.status)}
                      <div className="flex-1">
                        <div className="font-medium">{milestone.name}</div>
                        <div className="text-sm text-muted-foreground">Target: {milestone.date}</div>
                      </div>
                      <Badge
                        className={
                          milestone.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : milestone.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {milestone.status.replace("-", " ")}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>Access and download your project files</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload File
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-card/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Uploaded: {doc.uploadDate} • {doc.size}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Project Communication</CardTitle>
                <CardDescription>Chat with your assigned consultant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "client" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.role === "client"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border"
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{message.sender}</div>
                        <div className="text-sm">{message.message}</div>
                        <div className="text-xs opacity-70 mt-1">{new Date(message.timestamp).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Project Feedback</CardTitle>
                <CardDescription>Share your thoughts and feedback on the project</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="satisfaction">Overall Satisfaction</Label>
                    <select id="satisfaction" className="w-full p-2 border border-border rounded-md bg-background">
                      <option value="">Select rating</option>
                      <option value="5">Excellent (5/5)</option>
                      <option value="4">Good (4/5)</option>
                      <option value="3">Average (3/5)</option>
                      <option value="2">Below Average (2/5)</option>
                      <option value="1">Poor (1/5)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Please share your thoughts about the project, consultant, and overall experience..."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="improvements">Suggestions for Improvement</Label>
                    <Textarea
                      id="improvements"
                      placeholder="Any suggestions on how we can improve our services?"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
