import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import ContactSection from './Contact/contact';
import styles from './layout.module.css';
import OpeningTimes from './OpeningTimes/OpeningTimes';

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
        <main>{children}</main>
        <div className={styles.BottomSection}>
          <OpeningTimes />
          <ContactSection />
          <div className={styles.Address}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5319.498618953853!2d16.33495227536371!3d48.19218144735952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da81f177a87af%3A0x886e3b9b7217b8fc!2sHappy%20Buddha!5e0!3m2!1sen!2sat!4v1738078554284!5m2!1sen!2sat"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
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
