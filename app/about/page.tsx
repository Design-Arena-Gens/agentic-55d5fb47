export default function AboutPage() {
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div className="container" style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Élégance</h1>
          <p style={styles.heroSubtitle}>
            Redefining luxury fashion for the modern woman
          </p>
        </div>
      </div>

      <div className="container" style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.paragraph}>
            Founded in 2020, Élégance has become synonymous with timeless elegance and
            unparalleled craftsmanship. Our journey began with a simple vision: to create
            a luxury fashion destination where sophistication meets contemporary design.
          </p>
          <p style={styles.paragraph}>
            Every piece in our collection is carefully curated to embody the essence of
            modern femininity. We believe that luxury is not just about price—it's about
            quality, attention to detail, and the confidence that comes from wearing
            something truly exceptional.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Philosophy</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Quality</h3>
              <p style={styles.valueText}>
                We source only the finest materials and work with master artisans to
                ensure every garment meets our exacting standards.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Sustainability</h3>
              <p style={styles.valueText}>
                Our commitment to the environment drives us to create timeless pieces
                that transcend trends and seasons.
              </p>
            </div>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Elegance</h3>
              <p style={styles.valueText}>
                We believe true elegance is effortless, combining classic silhouettes
                with modern sensibilities.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Craftsmanship</h2>
          <p style={styles.paragraph}>
            Each piece is a testament to the skill and dedication of our artisans.
            From the initial sketch to the final stitch, we maintain rigorous quality
            control to ensure that every garment that bears the Élégance name is worthy
            of your wardrobe.
          </p>
          <p style={styles.paragraph}>
            Our atelier combines traditional tailoring techniques with innovative design,
            resulting in pieces that are both timeless and contemporary. We believe that
            true luxury lies in the details—the perfect drape of silk, the precision of
            a seam, the way a garment moves with you.
          </p>
        </section>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
  },
  hero: {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    color: 'var(--white)',
    padding: '6rem 0',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '300',
    letterSpacing: '0.1em',
    marginBottom: '1.5rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
  },
  content: {
    padding: '6rem 2rem',
    maxWidth: '900px',
  },
  section: {
    marginBottom: '5rem',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '2rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--grey)',
    marginBottom: '1.5rem',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  valueCard: {
    padding: '2rem',
    background: 'var(--light)',
    borderRadius: '4px',
  },
  valueTitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '1rem',
    color: 'var(--gold)',
  },
  valueText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: 'var(--grey)',
  },
}
