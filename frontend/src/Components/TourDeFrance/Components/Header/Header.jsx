import { useState, useEffect, useRef } from 'react'
import './Header.css'

import { Menu, X } from 'lucide-react'

// placeholder subdomains: swap in your real ones
const links = [
  { label: 'Home',        to: '/tdf'         },
  { label: 'Maps',        to: '/tdf/maps'    },
  { label: 'Photos',      to: '/tdf/photos'  },
  { label: 'Works Cited', to: '/tdf/sources' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  // while open: close on any click outside the menu, or on Escape
  useEffect(() => {
    if (!open) return

    const handlePointerDown = (e) => {
      if (!menuRef.current?.contains(e.target)) setOpen(false)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const toggle = () => setOpen((prev) => !prev)

  return (
    <div className="tdf-header">
      <div className="header-border" />
      <h1 className="tdf-text lexend-peta">
        FR 345
      </h1>

      <div className="menu-wrap" ref={menuRef}>
        <div
          className="icon-box"
          role="button"
          tabIndex={0}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggle()
            }
          }}
        >
          {open ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </div>

        <nav id="site-menu" className={`dropdown${open ? ' is-open' : ''}`}>
          <ul className="dropdown-inner">
            {links.map(({ label, to }) => (
              <li key={to}>
                <a href={to}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header