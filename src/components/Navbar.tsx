import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <Logo size={30} className="transition-opacity group-hover:opacity-80" />
          <span className="font-bold text-base tracking-tight text-white group-hover:text-accent transition-colors hidden sm:block">
            Mithileshan
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-accent'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="https://github.com/Mithileshan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mithileshan-muralidharan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-white/20 hover:border-accent/60 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-white/5 px-6 py-5 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Resume
          </a>
          <a href="https://github.com/Mithileshan" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mithileshan-muralidharan" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  )
}
