'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const points = [
  { heading: 'One email. One chance.', body: 'The app sends a single recovery email per abandoned checkout. No follow-up sequences. No re-engagement campaigns. One compliant reminder — that is the boundary.' },
  { heading: 'Recovery without discounts.', body: 'No discount logic. No urgency tricks. The email reminds the buyer what they left. The purchase decision stays with them.' },
  { heading: 'Full visibility.', body: 'Dashboard shows recovery rate, cart values, and email delivery health. Activity log tracks every cart, every send, every recovery. Nothing hidden.' },
]

export default function Abandoned() {
  const [modalOpen, setModalOpen] = useState(false)
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
        <p style={{ fontSize: '17px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px' }}>
          One consented recovery email. Sent at the right moment to a buyer who left something behind. No discount pressure. No campaign sequences. No manipulation. Just a clean, compliant signal that recovers revenue without damaging trust.
        </p>
        <div style={{ marginTop: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 700, marginRight: '8px' }}>Works with</p>
            <button onClick={() => setModalOpen(true)} style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F75C03', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>Shopify</button>
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
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(11,29,57,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '24px' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#FFFFFF', borderRadius: '12px', padding: '40px', width: '100%', maxWidth: '420px', border: '0.5px solid #EFEFEF' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F75C03', fontWeight: 700, marginBottom: '8px' }}>PromptSwing</p>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0B1D39', marginBottom: '8px' }}>Connect with Shopify</h2>
            <p style={{ fontSize: '13px', color: '#859CAC', marginBottom: '28px', lineHeight: 1.6 }}>Choose how you want to get started.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, background: '#0B1D39', color: '#FFFFFF', textDecoration: 'none' }}>Shopify App Store</a>
              <a href="https://app.promptswing.com/register" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, background: '#F75C03', color: '#FFFFFF', textDecoration: 'none' }}>Connect your store directly</a>
            </div>
            <p style={{ fontSize: '11px', color: '#C9A0A0', marginTop: '20px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setModalOpen(false)}>Cancel</p>
          </div>
        </div>
      )}
    </main>
  )
}
