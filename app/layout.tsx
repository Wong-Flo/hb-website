import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Happy Buddha',
  description: 'Dim-Sum Restaurant Happy Buddha in Vienna',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.BackgroundImageContainer}>
          <div className={styles.TopNavBar}>
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
          <Link href="/">
            <Image
              src="/hb_logo.png"
              alt="Happy Buddha Logo"
              width={80}
              height={80}
              className={styles.LogoTopRight}
            />
          </Link>

          <main>{children}</main>
        </div>
        <footer className={styles.FooterSection}>
          Impressum gem. §14 UGB und § 5 ECG: Firma: W57 Gesellschaft m.b.H,
          Rechtsform: Gesellschaft mit beschränkter Haftung, Sitz: Wien, Kammer:
          Gastronomie, Fachgruppe Wien Umsatzsteuer-Identifikationsnummer: UID
          ATU 67715225, Firmenbuchnummer: FN 386694v, Firmenbuchgericht:
          Handelsgericht Wien
        </footer>
      </body>
    </html>
  );
}
