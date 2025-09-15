import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Turn Your Business Vision Into Reality?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
              Join hundreds of successful entrepreneurs who chose Captibiz for their business planning needs. Get
              started today with a free consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Free Consultation
              </Button>
            </Link>
          </div>

          <div className="text-primary-foreground/80 text-sm">
            No upfront payment required • Free initial consultation • 100% satisfaction guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
