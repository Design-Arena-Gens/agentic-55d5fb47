import Link from 'next/link'

const collections = [
  {
    title: 'Evening Wear',
    description: 'Exquisite gowns and dresses for your most memorable occasions',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    link: '/shop?category=Evening Wear',
  },
  {
    title: 'Outerwear',
    description: 'Luxury coats, blazers, and jackets for sophisticated style',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    link: '/shop?category=Outerwear',
  },
  {
    title: 'Dresses',
    description: 'Timeless dresses for every occasion and season',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    link: '/shop?category=Dresses',
  },
  {
    title: 'Tops',
    description: 'Elegant blouses and tops crafted from the finest materials',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
    link: '/shop?category=Tops',
  },
  {
    title: 'Bottoms',
    description: 'Perfectly tailored pants, skirts, and more',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
    link: '/shop?category=Bottoms',
  },
]

export default function CollectionsPage() {
  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle}>Collections</h1>
          <p style={styles.pageSubtitle}>
            Explore our curated collections of luxury ladies garments
          </p>
        </div>
      </div>

      <div className="container" style={styles.content}>
        {collections.map((collection, index) => (
          <Link
            key={index}
            href={collection.link}
            style={{
              ...styles.collectionCard,
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            }}
            className="fade-in"
          >
            <div style={styles.collectionImage}>
              <img src={collection.image} alt={collection.title} />
            </div>
            <div style={styles.collectionContent}>
              <h2 style={styles.collectionTitle}>{collection.title}</h2>
              <p style={styles.collectionDescription}>{collection.description}</p>
              <span style={styles.exploreButton}>Explore Collection →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
  },
  pageHeader: {
    background: 'var(--dark)',
    color: 'var(--white)',
    padding: '4rem 0',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '300',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  pageSubtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
  },
  content: {
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  collectionCard: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    background: 'var(--white)',
    borderRadius: '4px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  collectionImage: {
    flex: 1,
    minHeight: '400px',
    overflow: 'hidden',
  },
  collectionContent: {
    flex: 1,
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  collectionTitle: {
    fontSize: 'clamp(2rem, 3vw, 3rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
  },
  collectionDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--grey)',
  },
  exploreButton: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--gold)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
}
