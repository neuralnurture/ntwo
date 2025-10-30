import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Neural Nurture - AI Research & Innovation',
  description: 'An emerging AI research lab developing next-generation solutions in Machine Learning, NLP, and Computer Vision - building the foundation for intelligent systems in travel and privacy.',
  keywords: 'AI, Machine Learning, NLP, Computer Vision, Research, Neural Nurture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Y45VVZJ240'

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
