import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'eVoucher Digital Platform - Enterprise Repository',
  description:
    'Enterprise Repository and Architecture Command Centre for the eVoucher Digital Platform ecosystem.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
