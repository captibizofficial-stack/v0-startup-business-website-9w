import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    role: "CEO & Founder",
    content:
      "Captibiz helped us secure $2.5M in Series A funding. Their business plan was comprehensive and the financial projections were spot-on. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Green Energy Innovations",
    role: "Co-Founder",
    content:
      "The team at Captibiz made our SBA loan application process seamless. We got approved for $500K within 6 weeks. Their expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    company: "Fashion Forward LLC",
    role: "Owner",
    content:
      "As an immigrant entrepreneur, getting my E-2 visa was crucial. Captibiz's investor visa support was exceptional - approved on first try!",
    rating: 5,
  },
  {
    name: "David Thompson",
    company: "Thompson Manufacturing",
    role: "President",
    content:
      "Their financial modeling helped us identify cost savings of $300K annually. The ROI on their services was incredible.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    company: "Digital Marketing Pro",
    role: "Founder",
    content:
      "Professional, fast, and affordable. Captibiz delivered our business plan in 5 days and it exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    company: "Williams Construction",
    role: "Owner",
    content:
      "The pitch deck they created helped us win a $1M contract. Their presentation skills and design are top-notch.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Don't just take our word for it. Here's what successful entrepreneurs say about working with Captibiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
