'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { CreditCard, Lock } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getCartTotal, clearCart } = useCart()
  const [processing, setProcessing] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })

  useEffect(() => {
    setMounted(true)
    if (cart.length === 0) {
      router.push('/shop')
    }
  }, [cart.length, router])

  if (!mounted || cart.length === 0) {
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    setTimeout(() => {
      clearCart()
      router.push('/order-confirmation')
    }, 2000)
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 500 ? 0 : 50
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div style={styles.page}>
      <div className="container" style={styles.content}>
        <div style={styles.checkoutContainer}>
          <div style={styles.formSection}>
            <h1 style={styles.pageTitle}>Checkout</h1>

            <form onSubmit={handleSubmit} style={styles.form}>
              <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </section>

              <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Shipping Address</h2>
                <div style={styles.formRow}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <div style={styles.formRow}>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
              </section>

              <section style={styles.section}>
                <h2 style={styles.sectionTitle}>
                  <CreditCard size={20} style={{ marginRight: '0.5rem' }} />
                  Payment Information
                </h2>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on card"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <div style={styles.formRow}>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.securityNote}>
                  <Lock size={16} />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </section>

              <button
                type="submit"
                disabled={processing}
                style={{
                  ...styles.submitButton,
                  ...(processing ? styles.submitButtonDisabled : {})
                }}
              >
                {processing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          <div style={styles.orderSummary}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>

            <div style={styles.orderItems}>
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} style={styles.orderItem}>
                  <div style={styles.orderItemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div style={styles.orderItemDetails}>
                    <h4 style={styles.orderItemName}>{item.name}</h4>
                    <p style={styles.orderItemMeta}>Size: {item.selectedSize} • Qty: {item.quantity}</p>
                    <p style={styles.orderItemPrice}>${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.divider}></div>

            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div style={styles.divider}></div>

            <div style={styles.summaryTotal}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
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
    background: 'var(--light)',
  },
  content: {
    maxWidth: '1200px',
  },
  checkoutContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '3rem',
  },
  formSection: {
    background: 'var(--white)',
    padding: '3rem',
    borderRadius: '4px',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '1rem',
    border: '1px solid #d5d5d5',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  securityNote: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--grey)',
    marginTop: '0.5rem',
  },
  submitButton: {
    padding: '1.5rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1.1rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '4px',
    marginTop: '1rem',
    transition: 'all 0.3s ease',
  },
  submitButtonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  orderSummary: {
    background: 'var(--white)',
    padding: '2rem',
    borderRadius: '4px',
    height: 'fit-content',
    position: 'sticky',
    top: '6rem',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '1.5rem',
  },
  orderItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  orderItem: {
    display: 'flex',
    gap: '1rem',
  },
  orderItemImage: {
    width: '60px',
    height: '75px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  orderItemDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  orderItemName: {
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  orderItemMeta: {
    fontSize: '0.8rem',
    color: 'var(--grey)',
  },
  orderItemPrice: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--gold)',
  },
  divider: {
    height: '1px',
    background: '#e5e5e5',
    margin: '1rem 0',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    marginBottom: '0.75rem',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginTop: '0.5rem',
  },
}
