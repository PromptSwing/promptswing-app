import Link from 'next/link'
import Image from 'next/image'

export default function RefundPolicy() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', padding: '60px 24px', maxWidth: '720px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '48px' }}>
        <Image src="/images/wordmark2.png" alt="PromptSwing" width={976} height={521} style={{ width: '160px', height: 'auto' }} />
      </Link>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0B1D39', marginBottom: '8px' }}>Refund Policy</h1>
      <p style={{ fontSize: '13px', color: '#859CAC', marginBottom: '48px' }}>Last updated: April 24, 2026</p>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#0B1D39' }}>
        <p style={{ marginBottom: '24px', color: '#859CAC' }}>Paddle is the Merchant of Record for all PromptSwing purchases. Paddle handles payment processing, VAT, tax compliance, and billing globally on our behalf. For billing questions, contact <a href="mailto:billing@promptswing.com" style={{ color: '#F75C03' }}>billing@promptswing.com</a>.</p>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Monthly Subscriptions</h2>
          <p style={{ color: '#859CAC' }}>Monthly subscriptions are non-refundable. When you cancel, your access continues until the end of the current billing period. No partial-month refunds are issued.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Annual Subscriptions</h2>
          <p style={{ color: '#859CAC' }}>Annual plans are eligible for a pro-rata refund of unused months within 30 days of the original purchase date. After 30 days, annual subscriptions are non-refundable. Contact billing@promptswing.com with your order details within the 30-day window.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Cancellation</h2>
          <p style={{ color: '#859CAC' }}>You may cancel at any time. Access continues through the end of your billing period. Upon cancellation you retain access to your account data export at no charge.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Free Tier and Trial Access</h2>
          <p style={{ color: '#859CAC' }}>Captain's one-time free run carries no refund eligibility. Shopify app free installs are subject to Shopify's billing terms — no PromptSwing charge applies until usage-based billing is triggered.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Exceptions</h2>
          <p style={{ color: '#859CAC' }}>Refunds outside this policy may be considered at PromptSwing's sole discretion in cases of documented technical failure that prevented access to a paid feature for a material portion of your billing period. Requests must be submitted within 14 days of the incident.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Processing</h2>
          <p style={{ color: '#859CAC' }}>Approved refunds are processed by Paddle and typically appear within 5–10 business days depending on your payment provider.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>Contact</h2>
          <p style={{ color: '#859CAC' }}><a href="mailto:billing@promptswing.com" style={{ color: '#F75C03' }}>billing@promptswing.com</a></p>
        </div>
      </div>
    </main>
  )
}
