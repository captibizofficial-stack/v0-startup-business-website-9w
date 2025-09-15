import Header from "@/components/header"
import Footer from "@/components/footer"
import AdminDashboard from "@/components/admin-dashboard"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  )
}
