import Header from "@/components/header"
import Footer from "@/components/footer"
import ClientPortal from "@/components/client-portal"

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <ClientPortal />
      </main>
      <Footer />
    </div>
  )
}
