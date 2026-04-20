import Link from 'next/link'
import Image from 'next/image'

export default function Terms() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', padding: '60px 24px', maxWidth: '720px', margin: '0 auto' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '48px' }}>
        <Image src="/images/wordmark2.png" alt="PromptSwing" width={976} height={521} style={{ width: '160px', height: 'auto' }} />
      </Link>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0B1D39', marginBottom: '8px' }}>Terms of Service</h1>
      <p style={{ fontSize: '13px', color: '#859CAC', marginBottom: '48px' }}>Effective Date: April 19, 2026</p>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#0B1D39' }}>
        <p style={{ marginBottom: '24px' }}>These Terms of Service govern your use of PromptSwing products and services, including the native platform at app.promptswing.com and all Shopify apps published under the PromptSwing brand. By registering or using any PromptSwing service, you agree to these terms.</p>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>1. Services</h2>
          <p>PromptSwing provides SaaS tools for ecommerce merchants including abandoned cart recovery, customer review management, revenue intelligence diagnostics, and commerce belief governance. Services are provided on a subscription basis.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>2. Account Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account credentials. You must provide accurate registration information. PromptSwing reserves the right to suspend accounts that violate these terms or engage in fraudulent activity.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>3. Subscriptions and Billing</h2>
          <p>Subscriptions are billed monthly in advance. Payments are processed by Paddle, who acts as Merchant of Record. By subscribing, you authorize Paddle to charge your payment method on a recurring basis until you cancel.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>4. Cancellation</h2>
          <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. You will retain access to the service until that date.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>5. Acceptable Use</h2>
          <p>You may not use PromptSwing services to send unsolicited communications, violate applicable law, infringe third-party rights, or interfere with the platform infrastructure. Each app operates under a single-contact consent doctrine — one message per customer event, no campaigns, no follow-up sequences.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>6. Data</h2>
          <p>Your data belongs to you. PromptSwing processes merchant and order data only to deliver the services you have enabled. We do not sell data to third parties. See our <Link href="/privacy" style={{ color: '#F75C03' }}>Privacy Policy</Link> for full details.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>7. Limitation of Liability</h2>
          <p>PromptSwing provides diagnostic and intelligence services. Outputs are informational and do not constitute financial, legal, or business advice. PromptSwing is not liable for decisions made based on platform outputs. Our liability is limited to the amount paid in the 30 days preceding any claim.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>8. Changes to These Terms</h2>
          <p>We may update these terms with reasonable notice. Continued use of the service after changes constitutes acceptance. Updates will be posted at <Link href="/terms" style={{ color: '#F75C03' }}>promptswing.com/terms</Link>.</p>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>9. Contact</h2>
          <p><a href="mailto:hello@promptswing.com" style={{ color: '#F75C03' }}>hello@promptswing.com</a></p>
        </div>
      </div>
    </main>
  )
}
