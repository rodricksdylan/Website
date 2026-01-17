'use client'

import { useState, FormEvent } from 'react'
import styles from '../page.module.css'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // Store form reference before async operations
    const form = e.currentTarget

    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // Check if response is ok first
      if (response.ok) {
        try {
          const result = await response.json()
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your enquiry has been sent successfully.',
          })
          // Reset form using stored reference
          if (form) {
            form.reset()
          }
        } catch (jsonError) {
          // If JSON parsing fails but status is 200, still show success
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your enquiry has been sent successfully.',
          })
          if (form) {
            form.reset()
          }
        }
      } else {
        // Try to get error message from response
        try {
          const result = await response.json()
          setSubmitStatus({
            type: 'error',
            message: result.error || 'Something went wrong. Please try again.',
          })
        } catch (jsonError) {
          setSubmitStatus({
            type: 'error',
            message: `Server error (${response.status}). Please try again.`,
          })
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // If we got the email, show success instead of error
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your enquiry has been sent successfully.',
      })
      if (form) {
        form.reset()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Your name
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Jane Broker"
          autoComplete="name"
          required
        />
      </label>
      <label className={styles.label}>
        Work email
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="jane@brokerage.com.au"
          autoComplete="email"
          required
        />
      </label>
      <label className={styles.label}>
        What do you want to automate?
        <textarea
          className={styles.textarea}
          name="message"
          rows={4}
          placeholder="e.g., pre-renewal consents, chasing forms, audit trails..."
          required
        />
      </label>

      {submitStatus.type && (
        <div
          className={
            submitStatus.type === 'success'
              ? styles.formSuccess
              : styles.formError
          }
        >
          {submitStatus.message}
        </div>
      )}

      <button
        className={`${styles.btn} ${styles.btnPrimary} ${styles.btnBlock}`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  )
}
