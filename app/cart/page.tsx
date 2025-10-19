'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <ShoppingBag size={64} style={{ opacity: 0.3 }} />
        <h2 style={styles.emptyTitle}>Your cart is empty</h2>
        <p style={styles.emptyText}>Discover our exquisite collection</p>
        <Link href="/shop" style={styles.shopButton}>
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div className="container" style={styles.content}>
        <h1 style={styles.pageTitle}>Shopping Cart</h1>

        <div style={styles.cartLayout}>
          <div style={styles.cartItems}>
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} style={styles.cartItem}>
                <div style={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemCategory}>{item.category}</p>
                  <p style={styles.itemSize}>Size: {item.selectedSize}</p>
                  <p style={styles.itemPrice}>${item.price.toLocaleString()}</p>
                </div>

                <div style={styles.itemActions}>
                  <div style={styles.quantityControl}>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      style={styles.quantityButton}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      style={styles.quantityButton}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    style={styles.removeButton}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div style={styles.itemTotal}>
                  ${(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.cartSummary}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>

            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${getCartTotal().toLocaleString()}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span>{getCartTotal() > 500 ? 'Free' : '$50'}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Tax (estimate)</span>
              <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.summaryTotal}>
              <span>Total</span>
              <span>${(getCartTotal() + (getCartTotal() > 500 ? 0 : 50) + getCartTotal() * 0.08).toFixed(2)}</span>
            </div>

            <Link href="/checkout" style={styles.checkoutButton}>
              Proceed to Checkout
            </Link>

            <Link href="/shop" style={styles.continueButton}>
              Continue Shopping
            </Link>
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
    maxWidth: '1200px',
  },
  pageTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '3rem',
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '3rem',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr auto auto',
    gap: '1.5rem',
    padding: '1.5rem',
    background: 'var(--white)',
    border: '1px solid #e5e5e5',
    borderRadius: '4px',
    alignItems: 'center',
  },
  itemImage: {
    width: '120px',
    height: '150px',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  itemName: {
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  itemCategory: {
    fontSize: '0.85rem',
    color: 'var(--grey)',
    textTransform: 'uppercase',
  },
  itemSize: {
    fontSize: '0.9rem',
    color: 'var(--grey)',
  },
  itemPrice: {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--gold)',
  },
  itemActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid #e5e5e5',
    borderRadius: '4px',
    padding: '0.25rem',
  },
  quantityButton: {
    padding: '0.5rem',
    background: 'var(--light)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    padding: '0 1rem',
    fontWeight: '500',
  },
  removeButton: {
    padding: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: '#dc3545',
    transition: 'opacity 0.3s ease',
  },
  itemTotal: {
    fontSize: '1.25rem',
    fontWeight: '600',
    textAlign: 'right',
  },
  cartSummary: {
    background: 'var(--light)',
    padding: '2rem',
    borderRadius: '4px',
    height: 'fit-content',
    position: 'sticky',
    top: '6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '0.5rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
  },
  divider: {
    height: '1px',
    background: '#d5d5d5',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  checkoutButton: {
    padding: '1.25rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  continueButton: {
    padding: '1rem',
    background: 'transparent',
    border: '2px solid var(--dark)',
    color: 'var(--dark)',
    fontSize: '0.95rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  emptyCart: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    padding: '2rem',
  },
  emptyTitle: {
    fontSize: '2rem',
    fontWeight: '300',
  },
  emptyText: {
    fontSize: '1.1rem',
    color: 'var(--grey)',
  },
  shopButton: {
    padding: '1rem 2.5rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginTop: '1rem',
  },
}
