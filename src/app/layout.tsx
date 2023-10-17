import Script from "next/script";
import type { Metadata } from 'next'
import "./css/bootstrap.min.css"
import './css/animate.min.css'

export const metadata: Metadata = {
  title: 'Signature | Product',
  description: 'Signature | Product',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script>
    </html>
  )
}
