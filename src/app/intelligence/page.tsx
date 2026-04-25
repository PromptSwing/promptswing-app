import Link from 'next/link'
import Image from 'next/image'

const tools = [
  { name: 'Checkout Intelligence', gauge: 'Payment', description: 'Reads your authorization rate, decline patterns, and payment method performance. Tells you whether your checkout is losing money at the payment layer — and what the signal says about why.' },
  { name: 'Buyer Discovery', gauge: 'Acquisition', description: 'Maps where your buyers come from using order referrer and UTM signals. Surfaces which channels are producing and which are invisible. Tells you where acquisition is working and where it is breaking.' },
  { name: 'Revenue Leak Detector', gauge: 'Operational', description: 'Scans for operational revenue loss — refund drain, gateway error clusters, cancellation rate deviation. Surfaces losses that do not appear in your top-line numbers.' },
]

export default function Intelligence() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 48px', borderBottom: '1px solid #F0F0F0' }}>
        <Link href="/"><Image src="/images/wordmark2.png" alt="PromptSwing" width={913} height={342} style={{ width: '160px', height: 'auto' }} /></Link>
        <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <Image src="/images/shopify-badge.png" alt="Available on Shopify App Store" width={834} height={276} style={{ width: '110px', height: 'auto' }} />
        </a>
      </header>
      <section style={{ padding: '80px 48px 64px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '20px' }}>Revenue Intelligence</p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0B1D39', lineHeight: 1.2, marginBottom: '24px' }}>Intelligence Suite</h1>
        <p style={{ fontSize: '17px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px' }}>
          Three diagnostic tools in one. Each tool reads a different layer of your revenue engine and surfaces what the signal says. Powered by your store order and checkout data.
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
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>Amazon · Soon</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F8F8F8', color: '#859CAC', border: '1px solid #E8E8E8' }}>Headless · Soon</span>
          </div>
        </div>
      </section>
      <div style={{ height: '1px', background: '#F0F0F0', margin: '0 48px' }} />
      <section style={{ padding: '64px 48px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {tools.map((tool) => (
            <div key={tool.name} style={{ background: '#F8F8F8', borderRadius: '6px', padding: '36px 40px', borderLeft: '3px solid #0B1D39' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '10px' }}>{tool.gauge} Gauge</p>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0B1D39', marginBottom: '14px' }}>{tool.name}</h2>
              <p style={{ fontSize: '15px', color: '#859CAC', lineHeight: 1.75 }}>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ borderTop: '1px solid #F0F0F0', padding: '28px 48px' }}>
        <Link href="/" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>← Back to PromptSwing</Link>
      </footer>
    </main>
  )
}
