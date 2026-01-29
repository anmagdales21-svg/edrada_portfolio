import './globals.css'
import './components.css'

export const metadata = {
  title: 'An Edrada | Computer Systems Analyst',
  description: 'I am a Computer Systems Analyst with a strong foundation in system analysis and software development principles, focused on designing efficient, reliable, and user-centered information systems.',
  keywords: ['Computer Systems Analyst', 'Systems Analysis', 'Software Development', 'Portfolio'],
  authors: [{ name: 'An Edrada' }],
  openGraph: {
    title: 'An Edrada | Computer Systems Analyst',
    description: 'Computer Systems Analyst passionate about designing efficient, reliable, and user-centered information systems.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          An<span>.</span>Edrada
        </a>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#learning" className="navbar-link">Learning</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
        <button className="navbar-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} An Edrada. Crafted with passion and purpose.
        </p>
        <div className="footer-links">
          <a 
            href="mailto:anmagdales21@gmail.com" 
            className="footer-link"
          >
            Email
          </a>
          <a 
            href="https://github.com/anmagdales21-svg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
