'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { products, categories } from '@/data/products'
import { ChevronDown } from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory)

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <div style={styles.page}>
      <div style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle}>Shop</h1>
          <p style={styles.pageSubtitle}>Discover our complete collection</p>
        </div>
      </div>

      <div className="container" style={styles.content}>
        <aside style={styles.sidebar}>
          <div style={styles.filterSection}>
            <h3 style={styles.filterTitle}>Categories</h3>
            <div style={styles.categoryList}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.categoryButton,
                    ...(selectedCategory === category ? styles.categoryButtonActive : {})
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.filterSection}>
            <h3 style={styles.filterTitle}>Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={styles.select}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </aside>

        <div style={styles.productsSection}>
          <div style={styles.resultsHeader}>
            <p style={styles.resultsCount}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>

          <div style={styles.productsGrid}>
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                style={styles.productCard}
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
        </div>
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
    display: 'flex',
    gap: '3rem',
    padding: '4rem 2rem',
  },
  sidebar: {
    flex: '0 0 250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  filterSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  filterTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  },
  categoryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  categoryButton: {
    padding: '0.75rem 1rem',
    background: 'transparent',
    border: '1px solid #e5e5e5',
    textAlign: 'left',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
  },
  categoryButtonActive: {
    background: 'var(--gold)',
    color: 'var(--white)',
    borderColor: 'var(--gold)',
  },
  select: {
    padding: '0.75rem',
    border: '1px solid #e5e5e5',
    fontSize: '0.95rem',
    background: 'var(--white)',
    cursor: 'pointer',
  },
  productsSection: {
    flex: 1,
  },
  resultsHeader: {
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #e5e5e5',
  },
  resultsCount: {
    fontSize: '0.95rem',
    color: 'var(--grey)',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  productCard: {
    background: 'var(--white)',
    border: '1px solid #e5e5e5',
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
}
