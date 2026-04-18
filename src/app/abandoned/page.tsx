import Link from 'next/link'
import Image from 'next/image'

const points = [
  { heading: 'One email. One chance.', body: 'The app sends a single recovery email per abandoned checkout. No follow-up sequences. No re-engagement campaigns. One compliant reminder — that is the boundary.' },
  { heading: 'Recovery without discounts.', body: 'No discount logic. No urgency tricks. The email reminds the buyer what they left. The purchase decision stays with them.' },
  { heading: 'Full visibility.', body: 'Dashboard shows recovery rate, cart values, and email delivery health. Activity log tracks every cart, every send, every recovery. Nothing hidden.' },
]

export default function Abandoned() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 48px', borderBottom: '1px solid #F0F0F0' }}>
        <Link href="/"><Image src="/images/wordmark2.png" alt="PromptSwing" width={913} height={342} style={{ width: '160px', height: 'auto' }} /></Link>
        <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <Image src="/images/shopify-badge.png" alt="Available on Shopify App Store" width={834} height={276} style={{ width: '110px', height: 'auto' }} />
        </a>
      </header>
      <section style={{ padding: '80px 48px 64px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '20px' }}>Shopify App</p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0B1D39', lineHeight: 1.2, marginBottom: '24px' }}>Abandoned Cart Recovery</h1>
        <p style={{ fontSize: '17px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px', marginBottom: '36px' }}>
          One consented recovery email. Sent at the right moment to a buyer who left something behind. No discount pressure. No campaign sequences. No manipulation. Just a clean, compliant signal that recovers revenue without damaging trust.
        </p>
        <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: '#FFFFFF', background: '#F75C03', padding: '12px 22px', borderRadius: '4px' }}>
          Available on Shopify
        </a>
        <p style={{ fontSize: '11px', color: '#C9A0A0', marginTop: '10px', letterSpacing: '0.08em' }}>Submission in progress</p>
      </section>
      <div style={{ height: '1px', background: '#F0F0F0', margin: '0 48px' }} />
      <section style={{ padding: '64px 48px', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {points.map((item) => (
          <div key={item.heading} style={{ background: '#F8F8F8', borderRadius: '6px', padding: '32px 36px', borderLeft: '3px solid #0B1D39' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0B1D39', marginBottom: '12px' }}>{item.heading}</h2>
            <p style={{ fontSize: '15px', color: '#859CAC', lineHeight: 1.75 }}>{item.body}</p>
          </div>
        ))}
      </section>
      <footer style={{ borderTop: '1px solid #F0F0F0', padding: '28px 48px' }}>
        <Link href="/" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>← Back to PromptSwing</Link>
      </footer>
    </main>
  )
}
