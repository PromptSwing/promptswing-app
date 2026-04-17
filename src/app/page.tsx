import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    }}>

      <div style={{ marginBottom: '32px' }}>
        <Image
          src="/images/wordmark2.png"
          alt="PromptSwing"
          width={913}
          height={342}
          priority
          style={{ width: '340px', height: 'auto' }}
        />
      </div>

      <p style={{
        fontSize: '26px',
        letterSpacing: '0.1em',
        color: '#859CAC',
        textTransform: 'uppercase',
        marginBottom: '56px',
        fontWeight: 700,
      }}>
        Revenue protection for commerce
      </p>

      <nav style={{
        display: 'flex',
        gap: '48px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '56px',
      }}>
        {[
          { label: 'Intelligence', href: '/intelligence' },
          { label: 'Abandoned Cart', href: '/abandoned' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'Captain', href: '/captain' },
          { label: 'Privacy', href: '/privacy' },
        ].map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C9A0A0',
              fontWeight: 500,
            }}
          >
            {tool.label}
          </Link>
        ))}
      </nav>

      <a href="https://apps.shopify.com/partners/promptswing" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/shopify-badge.png"
          alt="Available on Shopify App Store"
          width={834}
          height={276}
          style={{ width: '130px', height: 'auto' }}
        />
      </a>

    </main>
  )
}
