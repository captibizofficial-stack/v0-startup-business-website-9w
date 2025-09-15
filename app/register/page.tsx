import Header from "@/components/header"
import Footer from "@/components/footer"
import RegisterForm from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
              <p className="text-muted-foreground">Join Captibiz and start your business journey</p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
