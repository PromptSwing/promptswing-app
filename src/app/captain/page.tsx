import Link from 'next/link'
import Image from 'next/image'

export default function Captain() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <Link href="/" style={{ marginBottom: '48px' }}>
        <Image src="/images/wordmark2.png" alt="PromptSwing" width={913} height={342} style={{ width: '200px', height: 'auto' }} />
      </Link>
      <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0B1D39', marginBottom: '16px' }}>Captain</h1>
      <p style={{ fontSize: '15px', color: '#859CAC', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>Coming Soon</p>
      <p style={{ fontSize: '14px', color: '#859CAC', marginTop: '12px', textAlign: 'center', maxWidth: '360px', lineHeight: '1.7' }}>This page is under construction. Full availability coming in the near future.</p>
      <Link href="/" style={{ marginTop: '48px', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>Back to Home</Link>
    </main>
  )
}
