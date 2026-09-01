import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SeaFever | Beach House in Amanzimtoti',
  description: 'A pet-friendly, accessible three-bedroom self-catering beach house with direct beach access in Amanzimtoti, Durban.',
  openGraph: {
    title: 'SeaFever | Beach House in Amanzimtoti',
    description: 'Your relaxed, pet-friendly beach house on Durban’s sunny south coast.',
    images: [{ url: '/og.png', width: 1733, height: 909, alt: 'SeaFever beach house in Amanzimtoti' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SeaFever | Beach House in Amanzimtoti',
    description: 'Your relaxed, pet-friendly beach house on Durban’s sunny south coast.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
