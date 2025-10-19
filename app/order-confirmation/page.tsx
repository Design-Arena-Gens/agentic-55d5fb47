import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div style={styles.page}>
      <div className="container" style={styles.content}>
        <CheckCircle size={80} style={styles.icon} />
        <h1 style={styles.title}>Order Confirmed!</h1>
        <p style={styles.subtitle}>
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <p style={styles.text}>
          A confirmation email has been sent to your email address with order details.
        </p>
        <div style={styles.actions}>
          <Link href="/shop" style={styles.primaryButton}>
            Continue Shopping
          </Link>
          <Link href="/" style={styles.secondaryButton}>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  icon: {
    color: '#28a745',
    marginBottom: '2rem',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: 'var(--grey)',
  },
  text: {
    fontSize: '1rem',
    color: 'var(--grey)',
    marginBottom: '3rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '1rem 2.5rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  secondaryButton: {
    padding: '1rem 2.5rem',
    background: 'transparent',
    border: '2px solid var(--dark)',
    color: 'var(--dark)',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
}
