import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'eVoucher Digital Platform - Enterprise Presentation Portal',
  description:
    'Executive presentation portal, architecture narrative, evidence model, and system front door for the eVoucher Digital Platform ecosystem.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
