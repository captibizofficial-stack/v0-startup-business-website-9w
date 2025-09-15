import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"
import PricingFAQ from "@/components/pricing-faq"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Simple, <span className="text-primary">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Professional business consulting services at rates 30-40% below traditional firms. No hidden fees, no
                surprises.
              </p>
            </div>
          </div>
        </div>
        <PricingSection />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
