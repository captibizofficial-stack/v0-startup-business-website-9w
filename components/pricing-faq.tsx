import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do your prices compare to traditional consulting firms?",
    answer:
      "Our prices are typically 30-40% lower than traditional consulting firms. While most firms charge $3,000-$5,000 for a business plan, we provide the same quality service starting at just $497. We achieve this through streamlined processes and technology, not by cutting corners on quality.",
  },
  {
    question: "What's included in the business plan?",
    answer:
      "Our business plans include: Executive Summary, Company Description, Market Analysis, Organization & Management, Service/Product Line, Marketing & Sales Strategy, Financial Projections, and Funding Request (if applicable). All plans are customized to your specific industry and business model.",
  },
  {
    question: "How long does it take to complete my project?",
    answer:
      "Standard delivery is 5-7 business days for most projects. We also offer rush delivery (2-3 days) for an additional fee. Complex projects like investor visa documentation may take 7-10 business days to ensure thoroughness.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! All packages include at least one round of revisions. Professional Plus includes 3 rounds, and Enterprise Premium includes unlimited revisions. We want to ensure you're completely satisfied with the final product.",
  },
  {
    question: "Can you help with SBA loans specifically?",
    answer:
      "Our Professional Plus and Enterprise Premium packages include SBA loan package preparation. We're familiar with SBA requirements and have helped clients secure over $50M in SBA funding with a 90% approval rate.",
  },
  {
    question: "What about investor visa documentation?",
    answer:
      "Our Enterprise Premium package includes comprehensive investor visa support for E-2, EB-5, and other investor visas. We work closely with immigration attorneys and understand USCIS requirements for business plans and investment documentation.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes, we provide 30 days of email support after delivery for all packages. Enterprise Premium clients get extended support and can schedule follow-up calls. We're here to help you succeed even after your project is complete.",
  },
  {
    question: "What if I need a refund?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our work, we'll first work to address your concerns through revisions. If you're still not satisfied, we'll provide a full refund.",
  },
]

export default function PricingFAQ() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Get answers to common questions about our pricing and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
