import Link from 'next/link'
import Image from 'next/image'

export default function Pricing() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#F8F8F8',
      padding: '60px 24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ display: 'inline-block', marginBottom: '48px' }}>
          <Image src="/images/wordmark2.png" alt="PromptSwing" width={976} height={521} style={{ width: '160px', height: 'auto' }} />
        </Link>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0B1D39', marginBottom: '8px' }}>Pricing</h1>
        <p style={{ fontSize: '15px', color: '#859CAC', marginBottom: '48px', lineHeight: '1.6' }}>Simple per-tool subscriptions. No setup fees. Cancel anytime.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {[
            { label: 'Abandoned Cart Recovery', price: '$19', description: 'Recover lost revenue from abandoned checkouts. One consent-based recovery email per abandoned cart. Dashboard with recovery rate, cart activity, and email health.', highlight: false },
            { label: 'Customer Reviews', price: '$19', description: 'Build and protect your store reputation. One review request per fulfilled order. Resolution flow, responsiveness scoring, and embeddable review widget.', highlight: false },
            { label: 'Intelligence Suite', price: '$49', description: 'Three diagnostic tools in one. Checkout Intelligence, Buyer Discovery, and Revenue Leak Detector — powered by Shopify order signals.', highlight: false },
            { label: 'Bundle — All Three Tools', price: '$69', description: 'Abandoned Cart Recovery, Customer Reviews, and Intelligence Suite. Full revenue protection coverage at one price.', highlight: true },
          ].map((plan) => (
            <div key={plan.label} style={{ background: '#FFFFFF', border: plan.highlight ? '1.5px solid #F75C03' : '0.5px solid #EFEFEF', borderRadius: '12px', padding: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                {plan.highlight && <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '6px' }}>Best Value</p>}
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#0B1D39', marginBottom: '6px' }}>{plan.label}</p>
                <p style={{ fontSize: '13px', color: '#859CAC', lineHeight: '1.6' }}>{plan.description}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: '24px', fontWeight: 700, color: '#0B1D39' }}>{plan.price}</p>
                <p style={{ fontSize: '11px', color: '#859CAC' }}>per month</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#0B1D39', borderRadius: '12px', padding: '28px 24px', marginBottom: '48px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '8px' }}>Captain</p>
          <p style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>Belief Governance for Consequential Decisions</p>
          <p style={{ fontSize: '13px', color: '#859CAC', lineHeight: '1.6', marginBottom: '20px' }}>Pre-decision intelligence for commerce operators. Demand, supply, marketing, and verdict signals synthesized before you commit.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div><p style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>$99</p><p style={{ fontSize: '11px', color: '#859CAC' }}>Solo / month</p></div>
            <div><p style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>$199</p><p style={{ fontSize: '11px', color: '#859CAC' }}>Pro / month</p></div>
          </div>
        </div>
        <p style={{ fontSize: '13px', color: '#859CAC', lineHeight: '1.6' }}>
          All subscriptions billed monthly. No contracts. Cancel anytime. Questions? <a href="mailto:billing@promptswing.com" style={{ color: '#F75C03' }}>billing@promptswing.com</a>
        </p>
      </div>
    </main>
  )
}
