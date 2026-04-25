import Image from 'next/image'
import Link from 'next/link'

const tools = [
  {
    href: '/intelligence',
    label: 'Intelligence Suite',
    tag: 'Shopify App',
    description: 'Three diagnostic tools in one. Checkout Intelligence reads your payment layer. Buyer Discovery maps where buyers come from. Revenue Leak Detector surfaces operational losses you cannot see from the dashboard.',
    ctaHref: 'https://apps.shopify.com/partners/promptswing',
    platforms: [
      { label: 'Shopify', status: 'live' },
      { label: 'WooCommerce', status: 'coming' },
      { label: 'BigCommerce', status: 'coming' },
      { label: 'Magento', status: 'coming' },
      { label: 'Amazon', status: 'coming', note: 'Order & ad signals via SP-API' },
      { label: 'Headless', status: 'coming' },
    ],
  },
  {
    href: '/abandoned',
    label: 'Abandoned Cart',
    tag: 'Shopify App',
    description: 'One consented recovery email, sent at the right moment to a buyer who left something behind. No discounts. No pressure campaigns. Just a clean, compliant signal that recovers revenue without damaging trust.',
    ctaHref: 'https://apps.shopify.com/partners/promptswing',
    platforms: [
      { label: 'Shopify', status: 'live' },
      { label: 'WooCommerce', status: 'coming' },
      { label: 'BigCommerce', status: 'coming' },
      { label: 'Magento', status: 'coming' },
      { label: 'Headless', status: 'coming' },
    ],
  },
  {
    href: '/reviews',
    label: 'Customer Reviews',
    tag: 'Shopify App',
    description: 'Request one review per order. Resolve unhappy customers privately. Protect your store rating with a system that measures responsiveness, not just stars.',
    ctaHref: 'https://apps.shopify.com/partners/promptswing',
    platforms: [
      { label: 'Shopify', status: 'live' },
      { label: 'WooCommerce', status: 'coming' },
      { label: 'BigCommerce', status: 'coming' },
      { label: 'Magento', status: 'coming' },
      { label: 'Headless', status: 'coming' },
    ],
  },
  {
    href: '/captain',
    label: 'Captain',
    tag: 'Internal — V1',
    description: 'Belief governance for consequential commerce decisions. Captain evaluates demand, supply, marketing signals, and market verdict before you commit. It does not tell you what to do. It tells you what the evidence supports.',
    ctaHref: null,
    platforms: [],
  },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>

      {/* Header */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 64px' }}>
        <div style={{ marginBottom: '32px' }}>
          <Image src="/images/wordmark2.png" alt="PromptSwing" width={913} height={342} priority style={{ width: '340px', height: 'auto' }} />
        </div>
        <p style={{ fontSize: '26px', letterSpacing: '0.1em', color: '#859CAC', textTransform: 'uppercase', marginBottom: '56px', fontWeight: 700 }}>
          Revenue protection for commerce
        </p>
        <nav style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '56px' }}>
          {[
            { label: 'Intelligence', href: '/intelligence' },
            { label: 'Abandoned Cart', href: '/abandoned' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Captain', href: '/captain' },
            { label: 'Privacy', href: '/privacy' },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} style={{ fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>
              {tool.label}
            </Link>
          ))}
          <a href="https://app.promptswing.com/login" style={{ fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0B1D39', fontWeight: 700 }}>
            Log in
          </a>
        </nav>
        <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <Image src="/images/shopify-badge.png" alt="Available on Shopify App Store" width={834} height={276} style={{ width: '130px', height: 'auto' }} />
        </a>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', background: '#F0F0F0', margin: '0 48px' }} />

      {/* Hero */}
      <section style={{ padding: '96px 48px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '24px' }}>
          Revenue Protection Infrastructure
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#0B1D39', lineHeight: 1.15, marginBottom: '28px' }}>
          The dashboard your commerce engine is missing.
        </h1>
        <p style={{ fontSize: '18px', color: '#859CAC', lineHeight: 1.75, maxWidth: '580px' }}>
          Keep your customers. Analyze what your revenue is doing. Fix what's lost and leaking. PromptSwing tools pay for themselves. Then keep going.
        </p>
        <a href="https://app.promptswing.com/register" style={{ display: 'inline-block', marginTop: '32px', background: '#F75C03', color: '#FFFFFF', fontSize: '13px', fontWeight: 600, padding: '12px 28px', borderRadius: '6px', textDecoration: 'none' }}>
          Get started
        </a>
      </section>

      <div style={{ height: '1px', background: '#F0F0F0', margin: '0 48px' }} />

      {/* Tools */}
      <section style={{ padding: '80px 48px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#859CAC', fontWeight: 700, marginBottom: '56px' }}>
          The Tools
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
          {tools.map((tool) => (
            <div key={tool.href}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }}>
                <div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: tool.tag === 'Internal — V1' ? '#C9A0A0' : '#F75C03', fontWeight: 700, marginBottom: '10px' }}>
                    {tool.tag}
                  </p>
                  <Link href={tool.href}>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0B1D39', lineHeight: 1.3, marginBottom: '20px' }}>
                      {tool.label}
                    </h2>
                  </Link>
                </div>
                <div style={{ borderLeft: '2px solid #F0F0F0', paddingLeft: '48px' }}>
                  <p style={{ fontSize: '15px', color: '#859CAC', lineHeight: 1.8 }}>
                    {tool.description}
                  </p>
                  <Link href={tool.href} style={{ display: 'inline-block', marginTop: '20px', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: '#C9A0A0' }}>
                    Learn more →
                  </Link>
                  {tool.ctaHref !== null && (
                    <a href="https://app.promptswing.com/register" style={{ display: 'inline-block', marginTop: '12px', marginLeft: '20px', fontSize: '13px', fontWeight: 600, color: '#F75C03', textDecoration: 'none' }}>
                      Get started →
                    </a>
                  )}
                </div>
              </div>
              {tool.platforms.length > 0 && (
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #F0F0F0', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 700, marginRight: '8px' }}>Works with</p>
                  {tool.platforms.map((p) => (
                    <span key={p.label} title={p.note || ''} style={{
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '3px',
                      background: p.status === 'live' ? '#F75C03' : '#F8F8F8',
                      color: p.status === 'live' ? '#FFFFFF' : '#859CAC',
                      border: p.status === 'live' ? 'none' : '1px solid #E8E8E8',
                    }}>
                      {p.label}{p.status === 'coming' ? ' ·  Soon' : ''}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #F0F0F0', padding: '32px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '12px', color: '#C9A0A0' }}>© 2026 PromptSwing</p>
        <nav style={{ display: 'flex', gap: '32px' }}>
          {[
            { label: 'Pricing', href: '/pricing' },
            { label: 'Refund', href: '/refund-policy' },
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </footer>

    </main>
  )
}
