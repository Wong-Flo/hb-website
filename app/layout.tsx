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
          <div className={styles.Title}>HAPPY BUDDHA</div>
          <div className={styles.TopNavBar}>
            <Link href="/">Home</Link>
            <Link href="/News">News</Link>
            <Link href="/FindUs">Find us</Link>
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
        <div className={styles.BottomSection}>
          <div className={styles.OpeningTimes}>
            <h2>Opening Times</h2>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Monday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Tuesday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Wednesday </span>
              <span className={styles.Closed}>
                <u>Closed</u>
              </span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Thursday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Friday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Saturday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <div className={styles.TimeRow}>
              <span className={styles.Day}>Sunday </span>
              <span className={styles.Hours}>11:30-14:30 | 17:30-21:30</span>
            </div>
            <p className={styles.LastOrder}>
              *Last Order 30 minutes before closing*
            </p>
          </div>
          <div className={styles.ContactSection}>
            <h2>Contact</h2>
            <div className={styles.InfoRow}>
              <span className={styles.InfoText}>
                Mariahilfergürtel 17 | 1150 Vienna
              </span>
            </div>
            <div className={styles.InfoRow}>
              <span className={styles.InfoText}>+43-1-8934217</span>
            </div>
            <div className={styles.InfoRow}>
              <span className={styles.InfoText}>info@happybuddha.co.at</span>
            </div>
          </div>
        </div>
        <footer className={styles.FooterSection}>
          <Link href="/Impressum">
            <u>Impressum</u>
          </Link>
          <div style={{ paddingTop: '0.5rem' }}>Happy Buddha Est. 1994</div>
          <div className={styles.credit}> designed by F.W.</div>
        </footer>
      </body>
    </html>
  );
}
