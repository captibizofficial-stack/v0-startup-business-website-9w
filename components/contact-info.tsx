import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    contact: "info@captibiz.com",
    action: "mailto:info@captibiz.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team directly",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 9 AM - 6 PM EST",
    action: "#",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <a href={method.action} className="text-primary hover:underline font-medium">
                      {method.contact}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
          </div>
          <div className="space-y-2">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{schedule.day}</span>
                <span className="font-medium">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Our Location</h3>
          </div>
          <div className="text-sm space-y-1">
            <p className="font-medium">Captibiz Headquarters</p>
            <p className="text-muted-foreground">123 Business Avenue</p>
            <p className="text-muted-foreground">New York, NY 10001</p>
            <p className="text-muted-foreground">United States</p>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Consultation */}
      <Card className="border-border bg-card">
        <CardContent className="p-6 text-center">
          <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Schedule a 30-minute consultation to discuss your project and get expert advice.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule Now
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
