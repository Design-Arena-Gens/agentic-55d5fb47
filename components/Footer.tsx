import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>ÉLÉGANCE</h3>
          <p style={styles.footerText}>
            Luxury fashion for the modern woman. Curated collections that embody elegance and sophistication.
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" style={styles.socialLink} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" style={styles.socialLink} aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Shop</h4>
          <ul style={styles.footerList}>
            <li><a href="/shop">All Products</a></li>
            <li><a href="/shop?category=Evening Wear">Evening Wear</a></li>
            <li><a href="/shop?category=Dresses">Dresses</a></li>
            <li><a href="/shop?category=Outerwear">Outerwear</a></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Customer Care</h4>
          <ul style={styles.footerList}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>About</h4>
          <ul style={styles.footerList}>
            <li><a href="/about">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div className="container" style={styles.footerBottomContainer}>
          <p>&copy; 2025 Élégance. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    background: 'var(--dark)',
    color: 'var(--light)',
    padding: '4rem 0 0',
    marginTop: '6rem',
  },
  footerContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    paddingBottom: '3rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerTitle: {
    fontSize: '1.5rem',
    color: 'var(--gold)',
    letterSpacing: '0.2em',
    fontWeight: '300',
    marginBottom: '0.5rem',
  },
  footerText: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: '#999',
  },
  footerHeading: {
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  },
  footerList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '0.9rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  socialLink: {
    color: 'var(--light)',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    borderTop: '1px solid #333',
    padding: '2rem 0',
  },
  footerBottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
    color: '#999',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  footerLinks: {
    display: 'flex',
    gap: '2rem',
  },
}
