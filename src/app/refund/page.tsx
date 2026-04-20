import Link from 'next/link'
import Image from 'next/image'

export default function Refund() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', padding: '60px 24px', maxWidth: '720px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '48px' }}>
        <Image src="/images/wordmark2.png" alt="PromptSwing" width={976} height={521} style={{ width: '160px', height: 'auto' }} />
      </Link>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0B1D39', marginBottom: '8px' }}>Refund Policy</h1>
      <p style={{ fontSize: '13px', color: '#859CAC', marginBottom: '48px' }}>Effective Date: April 19, 2026</p>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#0B1D39' }}>
        <p style={{ marginBottom: '24px' }}>PromptSwing offers subscription-based SaaS products. This policy explains how refunds are handled.</p>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Monthly Subscriptions</h2>
          <p>Monthly subscriptions are non-refundable. When you subscribe, you receive immediate access to the service for the full billing period. You may cancel at any time and your access will continue until the end of the current period. You will not be charged for subsequent months after cancellation.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Annual Subscriptions</h2>
          <p>Annual subscriptions may be refunded on a pro-rata basis for unused months, provided the refund request is submitted within 30 days of the original purchase date. Refunds are calculated from the date of the request, not the purchase date.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>How to Request a Refund</h2>
          <p>To request a refund on an eligible annual subscription, contact us at <a href="mailto:billing@promptswing.com" style={{ color: '#F75C03' }}>billing@promptswing.com</a> with your account email and the reason for your request. We will respond within 3 business days.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Payment Processing</h2>
          <p>All payments are processed by Paddle, who acts as Merchant of Record. Approved refunds are returned to the original payment method and may take 5–10 business days to appear depending on your bank or card issuer.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Contact</h2>
          <p><a href="mailto:billing@promptswing.com" style={{ color: '#F75C03' }}>billing@promptswing.com</a></p>
        </div>
      </div>
    </main>
  )
}
