import Header from "@/components/header"
import Footer from "@/components/footer"
import DashboardContent from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <DashboardContent />
      </main>
      <Footer />
    </div>
  )
}
