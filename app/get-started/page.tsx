import Header from "@/components/header"
import Footer from "@/components/footer"
import GetStartedForm from "@/components/get-started-form"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Let's Get <span className="text-primary">Started</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tell us about your project and we'll provide a custom quote within 24 hours.
              </p>
            </div>
            <GetStartedForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
