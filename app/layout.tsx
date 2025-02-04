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
            <Link href="/news">News</Link>
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
        <div className={styles.OpeningHours}>
          <h2>Opening Hours</h2>
          <table className={styles.OpeningTimesTable}>
            <tbody>
              <tr>
                <td>
                  Sunday <br /> Monday <br /> Tuesday
                </td>
                <td>
                  11:30-14:30 <br /> 17:30-21:30
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>
                  Thursday <br /> Friday <br />
                  Saturday
                </td>
                <td>
                  11:30-14:30 <br />
                  17:30-21:30
                </td>
              </tr>
            </tbody>
          </table>
          <span style={{ fontSize: '0.7rem' }}>
            **Last order 30 minutes before closing
          </span>
        </div>
        <footer className={styles.FooterSection}>
          <Link href="/Impressum">
            <u>Impressum</u>
          </Link>
          <div>Happy Buddha Est. 1994</div>
          <div className={styles.credit}> designed by F.W.</div>
        </footer>
      </body>
    </html>
  );
}
