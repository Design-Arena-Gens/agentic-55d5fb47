import Link from 'next/link'
import { products } from '@/data/products'

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 style={styles.sectionTitle}>New Arrivals</h2>
        <div style={styles.grid}>
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              style={styles.productCard}
              className="fade-in productCard"
            >
              <div style={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productCategory}>{product.category}</p>
                <p style={styles.productPrice}>${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={styles.viewAllWrapper}>
          <Link href="/shop" style={styles.viewAllButton}>
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '6rem 0',
    background: 'var(--light)',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  productCard: {
    background: 'var(--white)',
    borderRadius: '4px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  productImageWrapper: {
    position: 'relative',
    paddingTop: '125%',
    overflow: 'hidden',
  },
  productImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  productInfo: {
    padding: '1.5rem',
  },
  productName: {
    fontSize: '1.1rem',
    fontWeight: '400',
    marginBottom: '0.5rem',
  },
  productCategory: {
    fontSize: '0.85rem',
    color: 'var(--grey)',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  productPrice: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--gold)',
  },
  viewAllWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  },
  viewAllButton: {
    padding: '1rem 3rem',
    background: 'var(--dark)',
    color: 'var(--white)',
    fontSize: '1rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    border: '2px solid var(--dark)',
    transition: 'all 0.3s ease',
  },
}
