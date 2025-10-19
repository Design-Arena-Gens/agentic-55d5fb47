'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, Check } from 'lucide-react'

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === params.id)
  const [selectedSize, setSelectedSize] = useState('')
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h1>Product not found</h1>
        <button onClick={() => router.push('/shop')} style={styles.backButton}>
          Return to Shop
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addToCart(product, selectedSize)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div style={styles.page}>
      <div className="container" style={styles.content}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.productImage} />
        </div>

        <div style={styles.detailsSection}>
          <div style={styles.breadcrumb}>
            <a href="/shop" style={styles.breadcrumbLink}>Shop</a>
            <span style={styles.breadcrumbSeparator}>/</span>
            <a href={`/shop?category=${product.category}`} style={styles.breadcrumbLink}>
              {product.category}
            </a>
            <span style={styles.breadcrumbSeparator}>/</span>
            <span>{product.name}</span>
          </div>

          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.productPrice}>${product.price.toLocaleString()}</p>

          <div style={styles.divider}></div>

          <p style={styles.description}>{product.description}</p>

          <div style={styles.sizeSection}>
            <h3 style={styles.sizeTitle}>Select Size</h3>
            <div style={styles.sizeOptions}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    ...styles.sizeButton,
                    ...(selectedSize === size ? styles.sizeButtonActive : {})
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              ...styles.addToCartButton,
              ...(addedToCart ? styles.addToCartButtonSuccess : {})
            }}
          >
            {addedToCart ? (
              <>
                <Check size={20} />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={20} />
                Add to Cart
              </>
            )}
          </button>

          <div style={styles.infoSection}>
            <div style={styles.infoItem}>
              <h4 style={styles.infoTitle}>Free Shipping</h4>
              <p style={styles.infoText}>On orders over $500</p>
            </div>
            <div style={styles.infoItem}>
              <h4 style={styles.infoTitle}>Easy Returns</h4>
              <p style={styles.infoText}>30-day return policy</p>
            </div>
            <div style={styles.infoItem}>
              <h4 style={styles.infoTitle}>Authenticity</h4>
              <p style={styles.infoText}>100% genuine products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    padding: '4rem 0',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  imageSection: {
    position: 'sticky',
    top: '6rem',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  breadcrumb: {
    fontSize: '0.9rem',
    color: 'var(--grey)',
  },
  breadcrumbLink: {
    color: 'var(--grey)',
  },
  breadcrumbSeparator: {
    margin: '0 0.5rem',
  },
  productName: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '300',
    letterSpacing: '0.02em',
  },
  productPrice: {
    fontSize: '1.75rem',
    fontWeight: '500',
    color: 'var(--gold)',
  },
  divider: {
    height: '1px',
    background: '#e5e5e5',
    margin: '1rem 0',
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: 'var(--grey)',
  },
  sizeSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  sizeTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  sizeOptions: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  sizeButton: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #e5e5e5',
    background: 'var(--white)',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  sizeButtonActive: {
    borderColor: 'var(--gold)',
    background: 'var(--gold)',
    color: 'var(--white)',
  },
  addToCartButton: {
    padding: '1.25rem 2rem',
    background: 'var(--dark)',
    color: 'var(--white)',
    fontSize: '1.05rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '1rem',
    transition: 'all 0.3s ease',
  },
  addToCartButtonSuccess: {
    background: '#28a745',
  },
  infoSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
    padding: '2rem',
    background: 'var(--light)',
    borderRadius: '4px',
  },
  infoItem: {
    textAlign: 'center',
  },
  infoTitle: {
    fontSize: '0.95rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  infoText: {
    fontSize: '0.85rem',
    color: 'var(--grey)',
  },
  notFound: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  },
  backButton: {
    padding: '1rem 2rem',
    background: 'var(--dark)',
    color: 'var(--white)',
    fontSize: '1rem',
  },
}
