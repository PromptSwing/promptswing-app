import Link from 'next/link'
import Image from 'next/image'

export default function Privacy() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      padding: '60px 24px',
      maxWidth: '720px',
      margin: '0 auto',
    }}>

      <Link href="/" style={{ display: 'inline-block', marginBottom: '48px' }}>
        <Image
          src="/images/wordmark2.png"
          alt="PromptSwing"
          width={976}
          height={521}
          style={{ width: '160px', height: 'auto' }}
        />
      </Link>

      <h1 style={{
        fontSize: '28px',
        fontWeight: 700,
        color: '#0B1D39',
        marginBottom: '8px',
      }}>
        Privacy Policy
      </h1>

      <p style={{ fontSize: '13px', color: '#859CAC', marginBottom: '48px' }}>
        Effective Date: September 1, 2025
      </p>

      <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#0B1D39' }}>

        <p style={{ marginBottom: '24px' }}>
          At PromptSwing, we take privacy and data protection seriously. This Privacy Policy explains how our Shopify apps — PromptSwing Intelligence, Abandoned Cart Recovery, and Customer Reviews — handle information.
        </p>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>1. Information We Collect</h2>
          <p><strong>Merchant Input:</strong> Store configuration, product details, and campaign settings.</p>
          <p style={{ marginTop: '12px' }}><strong>Order &amp; Checkout Signals:</strong> Webhook signals from Shopify including order data, checkout events, and referral/UTM fields — used solely to provide revenue diagnostics and recovery services.</p>
          <p style={{ marginTop: '12px' }}><strong>Customer Contact Data (Abandoned Cart):</strong> With explicit merchant consent, customer email addresses may be processed to send a single recovery reminder per abandoned checkout.</p>
          <p style={{ marginTop: '12px' }}><strong>Review Data (Customer Reviews):</strong> With explicit merchant consent, a single review request may be sent per fulfilled order. Customer responses are stored to power the merchant dashboard.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>2. How We Use Information</h2>
          <p>Data is used only to deliver the specific service the merchant has enabled. We do not use merchant or customer data for advertising, profiling, or any purpose beyond the declared function of each app.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>3. Data Storage &amp; Retention</h2>
          <p>Webhook signals are processed and stored in isolated, app-specific databases on our infrastructure. Merchants may request data deletion at any time. We honor all Shopify mandatory privacy webhooks: customers/data_request, customers/redact, and shop/redact.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>4. Security</h2>
          <p>All communication between Shopify and our apps is encrypted via HTTPS. Webhook authenticity is verified via HMAC signature on every request.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>5. Merchant Rights</h2>
          <p>Merchants may request deletion of all stored data by contacting <a href="mailto:hello@promptswing.com" style={{ color: '#F75C03' }}>hello@promptswing.com</a>. Requests are processed within 30 days.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>6. Changes to This Policy</h2>
          <p>Updates will be posted at <a href="https://www.promptswing.com/privacy" style={{ color: '#F75C03' }}>promptswing.com/privacy</a>.</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>7. Contact</h2>
          <p><a href="mailto:hello@promptswing.com" style={{ color: '#F75C03' }}>hello@promptswing.com</a></p>
        </div>

      </div>
    </main>
  )
}
