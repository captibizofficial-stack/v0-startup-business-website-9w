// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  mobileMenu.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  mobileMenu.classList.add("hidden")
  menuIcon.classList.remove("hidden")
  closeIcon.classList.add("hidden")
}

// Contact form handling
function handleContactForm(event) {
  event.preventDefault()

  // Get form data
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to your backend
  // For now, we'll just show an alert
  alert("Thank you for your message! We will get back to you within 24 hours.")

  // Reset form
  event.target.reset()
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide // Declare the lucide variable
  if (lucide) {
    lucide.createIcons()
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        closeMobileMenu()
      }
    })
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
  } else {
    header.style.boxShadow = "none"
  }
})
