import Link from 'next/link'
import Image from 'next/image'

export default function Captain() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>

      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px 48px',
        borderBottom: '1px solid #F0F0F0',
      }}>
        <Link href="/">
          <Image src="/images/wordmark2.png" alt="PromptSwing" width={913} height={342} style={{ width: '160px', height: 'auto' }} />
        </Link>
      </header>

      <section style={{ padding: '80px 48px 64px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 700, marginBottom: '20px' }}>
          Internal — V1
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0B1D39', lineHeight: 1.2, marginBottom: '24px' }}>
          Captain
        </h1>
        <p style={{ fontSize: '17px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px', marginBottom: '16px' }}>
          Belief governance for consequential commerce decisions.
        </p>
        <p style={{ fontSize: '15px', color: '#859CAC', lineHeight: 1.8, maxWidth: '560px', fontStyle: 'italic' }}>
          "The evidence will support the answer."
        </p>
      </section>

      <div style={{ height: '1px', background: '#F0F0F0', margin: '0 48px' }} />

      <section style={{ padding: '64px 48px', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {[
          { heading: 'Before the decision.', body: 'Captain sits before you commit capital. It evaluates demand signals, supply conditions, marketing reach, and market verdict — then tells you what the evidence supports at the confidence level the data allows.' },
          { heading: 'Not a recommendation engine.', body: 'Captain does not tell you what to do. It tells you what is known, what is missing, and how confident the available signals are. The decision stays with you.' },
          { heading: 'Abstention is the system working.', body: 'When the evidence does not justify a belief at the required threshold, Captain abstains. That is not a failure — that is the system protecting you from a decision the data cannot support.' },
        ].map((item) => (
          <div key={item.heading} style={{
            background: '#F8F8F8',
            borderRadius: '6px',
            padding: '32px 36px',
            borderLeft: '3px solid #0B1D39',
          }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0B1D39', marginBottom: '12px' }}>{item.heading}</h2>
            <p style={{ fontSize: '15px', color: '#859CAC', lineHeight: 1.75 }}>{item.body}</p>
          </div>
        ))}

        <div style={{
          marginTop: '16px',
          padding: '28px 36px',
          background: '#F8F8F8',
          borderRadius: '6px',
          borderLeft: '3px solid #C9A0A0',
        }}>
          <p style={{ fontSize: '13px', color: '#C9A0A0', lineHeight: 1.75 }}>
            Captain is currently in internal use only. Public availability is planned following the V1 internal refinement period.
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #F0F0F0', padding: '28px 48px' }}>
        <Link href="/" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A0A0', fontWeight: 500 }}>
          ← Back to PromptSwing
        </Link>
      </footer>

    </main>
  )
}
