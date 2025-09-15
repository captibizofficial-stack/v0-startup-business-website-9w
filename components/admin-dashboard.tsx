"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, FileText, DollarSign, TrendingUp, Search, Filter, Download, Eye, Mail, Phone } from "lucide-react"

// Mock data for demonstration
const leads = [
  {
    id: 1,
    name: "John Smith",
    email: "john@techstart.com",
    phone: "+1 (555) 123-4567",
    company: "TechStart Solutions",
    service: "Business Plan Writing",
    budget: "$500-1000",
    timeline: "Within 1 week",
    status: "new",
    submittedAt: "2024-01-15T10:30:00Z",
    source: "Website Form",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@greentech.com",
    phone: "+1 (555) 987-6543",
    company: "Green Energy Innovations",
    service: "Financial Modeling",
    budget: "$1000-2000",
    timeline: "Within 2 weeks",
    status: "contacted",
    submittedAt: "2024-01-14T14:20:00Z",
    source: "Google Ads",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@restaurantpro.com",
    phone: "+1 (555) 456-7890",
    company: "Restaurant Pro LLC",
    service: "SBA Loan Application",
    budget: "$2000+",
    timeline: "ASAP",
    status: "qualified",
    submittedAt: "2024-01-13T09:15:00Z",
    source: "Referral",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    email: "elena@fashionforward.com",
    phone: "+1 (555) 321-0987",
    company: "Fashion Forward LLC",
    service: "Investor Visa Support",
    budget: "$2000+",
    timeline: "Within 1 month",
    status: "proposal-sent",
    submittedAt: "2024-01-12T16:45:00Z",
    source: "Social Media",
  },
]

const projects = [
  {
    id: 1,
    clientName: "TechStart Solutions",
    projectName: "Business Plan - Tech Startup",
    service: "Business Plan Writing",
    status: "in-progress",
    assignedTo: "John Doe",
    dueDate: "2024-01-20",
    value: 897,
  },
  {
    id: 2,
    clientName: "Green Energy Innovations",
    projectName: "Financial Model - Solar Project",
    service: "Financial Modeling",
    status: "completed",
    assignedTo: "Jane Smith",
    dueDate: "2024-01-18",
    value: 1297,
  },
  {
    id: 3,
    clientName: "Restaurant Pro LLC",
    projectName: "SBA Loan Package",
    service: "Loan Application",
    status: "review",
    assignedTo: "Mike Johnson",
    dueDate: "2024-01-22",
    value: 1597,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "new":
      return "bg-blue-100 text-blue-800"
    case "contacted":
      return "bg-yellow-100 text-yellow-800"
    case "qualified":
      return "bg-green-100 text-green-800"
    case "proposal-sent":
      return "bg-purple-100 text-purple-800"
    case "in-progress":
      return "bg-orange-100 text-orange-800"
    case "completed":
      return "bg-green-100 text-green-800"
    case "review":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage leads, projects, and client information</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button>
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leads.length}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">3 due this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (MTD)</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leads">Leads & Inquiries</TabsTrigger>
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Leads Tab */}
          <TabsContent value="leads" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Lead Management</CardTitle>
                    <CardDescription>Track and manage incoming leads and inquiries</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contact Info</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-2">
                              <Mail className="h-3 w-3" />
                              <span>{lead.email}</span>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-2">
                              <Phone className="h-3 w-3" />
                              <span>{lead.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell>{lead.service}</TableCell>
                        <TableCell>{lead.budget}</TableCell>
                        <TableCell>{lead.timeline}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(lead.status)}>
                            {lead.status.replace("-", " ").toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>{lead.source}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Monitor ongoing client projects and deliverables</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.clientName}</TableCell>
                        <TableCell>{project.projectName}</TableCell>
                        <TableCell>{project.service}</TableCell>
                        <TableCell>{project.assignedTo}</TableCell>
                        <TableCell>{project.dueDate}</TableCell>
                        <TableCell>${project.value.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.replace("-", " ").toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Sources</CardTitle>
                  <CardDescription>Where your leads are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Website Form</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Google Ads</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Referrals</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Social Media</span>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Demand</CardTitle>
                  <CardDescription>Most requested services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Business Plan Writing</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Financial Modeling</span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SBA Loan Applications</span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Investor Visa Support</span>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Key metrics for the current month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-sm text-muted-foreground">New Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">16</div>
                    <div className="text-sm text-muted-foreground">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">11</div>
                    <div className="text-sm text-muted-foreground">Projects Started</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
