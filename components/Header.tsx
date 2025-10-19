'use client'

import Link from 'next/link'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function Header() {
  const { getCartCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerContainer}>
        <button
          style={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link href="/" style={styles.logo}>
          ÉLÉGANCE
        </Link>

        <nav style={{
          ...styles.nav,
          ...(mobileMenuOpen ? styles.navOpen : {})
        }}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
        </nav>

        <div style={styles.actions}>
          <button style={styles.iconButton} aria-label="Search">
            <Search size={22} />
          </button>
          <Link href="/cart" style={styles.cartButton}>
            <ShoppingBag size={22} />
            {getCartCount() > 0 && (
              <span style={styles.cartBadge}>{getCartCount()}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'var(--white)',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '1.5rem 0',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '300',
    letterSpacing: '0.2em',
    color: 'var(--gold)',
  },
  nav: {
    display: 'flex',
    gap: '2.5rem',
    fontSize: '0.95rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  navOpen: {
    display: 'flex',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  iconButton: {
    background: 'none',
    padding: '0.5rem',
    color: 'var(--dark)',
  },
  cartButton: {
    position: 'relative',
    padding: '0.5rem',
    color: 'var(--dark)',
  },
  cartBadge: {
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    color: 'var(--dark)',
    padding: '0.5rem',
  },
}
