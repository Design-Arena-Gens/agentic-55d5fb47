'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section style={styles.section}>
      <div className="container" style={styles.content}>
        <h2 style={styles.title}>Join Our Exclusive Circle</h2>
        <p style={styles.subtitle}>
          Subscribe to receive updates on new arrivals, special offers, and exclusive events.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>
        {submitted && (
          <p style={styles.successMessage}>Thank you for subscribing!</p>
        )}
      </div>
    </section>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '6rem 0',
    background: 'var(--dark)',
    color: 'var(--white)',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    fontWeight: '300',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.9,
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  form: {
    display: 'flex',
    gap: '1rem',
    maxWidth: '500px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    minWidth: '250px',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    border: '2px solid var(--light)',
    background: 'transparent',
    color: 'var(--white)',
    outline: 'none',
  },
  button: {
    padding: '1rem 2.5rem',
    background: 'var(--gold)',
    color: 'var(--white)',
    fontSize: '1rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    border: '2px solid var(--gold)',
  },
  successMessage: {
    marginTop: '1.5rem',
    color: 'var(--gold)',
    fontSize: '1rem',
  },
}
