'use client'
import { useState } from 'react'

export default function ShopifyModal() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button onClick={() => setModalOpen(true)} style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', background: '#F75C03', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>Shopify</button>

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
    </>
  )
}
