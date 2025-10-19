import Link from 'next/link'

const collections = [
  {
    title: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
    link: '/shop?category=Evening Wear',
  },
  {
    title: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
    link: '/shop?category=Outerwear',
  },
  {
    title: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    link: '/shop?category=Dresses',
  },
]

export default function FeaturedCollections() {
  return (
    <section style={styles.section}>
      <div className="container">
        <h2 style={styles.sectionTitle}>Featured Collections</h2>
        <div style={styles.grid}>
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.link}
              style={styles.collectionCard}
              className="fade-in collectionCard"
            >
              <div style={styles.collectionImageWrapper}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  style={styles.collectionImage}
                />
                <div style={styles.collectionOverlay}>
                  <h3 style={styles.collectionTitle}>{collection.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '6rem 0',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  collectionCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  collectionImageWrapper: {
    position: 'relative',
    paddingTop: '125%',
  },
  collectionImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  collectionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '2rem',
  },
  collectionTitle: {
    color: 'var(--white)',
    fontSize: '1.5rem',
    fontWeight: '300',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}
