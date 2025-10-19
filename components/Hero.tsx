import Link from 'next/link'

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div className="container" style={styles.heroContent}>
        <h1 style={styles.heroTitle} className="fade-in">
          Timeless Elegance
        </h1>
        <p style={styles.heroSubtitle} className="fade-in">
          Discover the finest collection of luxury ladies garments
        </p>
        <Link href="/shop" style={styles.heroButton} className="fade-in">
          Explore Collection
        </Link>
      </div>
    </section>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: 'relative',
    height: '85vh',
    minHeight: '600px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'var(--white)',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: '300',
    letterSpacing: '0.1em',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    fontWeight: '300',
    marginBottom: '3rem',
    opacity: 0.9,
  },
  heroButton: {
    display: 'inline-block',
    padding: '1rem 3rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    border: '2px solid var(--gold)',
    transition: 'all 0.3s ease',
  },
}
