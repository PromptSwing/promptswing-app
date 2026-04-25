import Link from 'next/link'
import Image from 'next/image'

const points = [
  { heading: 'One request. No campaigns.', body: 'The app sends a single review request per completed order. No follow-up sequences. No incentive pressure. Compliant with ecommerce consent standards.' },
  { heading: 'Private resolution before public damage.', body: 'Unhappy customers receive a private resolution path. Merchant responds. Customer confirms satisfaction. Resolved reviews are excluded from your average — with their original rating preserved. No inflation. No vanity metrics.' },
  { heading: 'Responsiveness score.', body: 'Your score measures how well you handle negative feedback — not just how many five-star reviews you have. A merchant who resolves problems is more trustworthy than one who has never been tested.' },
  { heading: 'Public storefront badge.', body: 'Once eligible, your responsiveness score and rating display publicly on your storefront via an embeddable widget. Buyers see the score before they purchase. Trust is visible where it matters.' },
]

export default function Reviews() {
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
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0B1D39', lineHeight: 1.2, marginBottom: '24px' }}>Customer Reviews</h1>
        <p style={{ fontSize: '17px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px' }}>
          One review request per order. A private resolution system for unhappy customers. A responsiveness score that measures how well you handle problems — not just how many stars you collect.
        </p>
        <div style={{ marginTop: '32px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
            <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: '#FFFFFF', background: '#0B1D39', padding: '12px 22px', borderRadius: '4px', textDecoration: 'none' }}>Shopify App Store</a>
            <a href="https://app.promptswing.com/register" style={{ display: 'inline-block', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: '#FFFFFF', background: '#F75C03', padding: '12px 22px', borderRadius: '4px', textDecoration: 'none' }}>Connect your store</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 700, marginRight: '8px' }}>Works with</p>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F75C03', color: '#FFFFFF' }}>Shopify</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>WooCommerce · Soon</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>BigCommerce · Soon</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>Magento · Soon</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>Headless · Soon</span>
          </div>
        </div>
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
