'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../layout.module.css';

export default function Navbar() {
  const pathname = usePathname();

  // Determine the background image based on the current route
  let backgroundImage;
  switch (pathname) {
    case '/':
      backgroundImage = "url('StockPic1.jpg')";
      break;
    case '/News':
      backgroundImage = "url('StockPic2.jpg')";
      break;
    case '/FindUs':
      backgroundImage = "url('StockPic3.jpg')";
      break;
    case '/AboutUs':
      backgroundImage = "url('StockPic4.jpg')";
      break;
    default:
      backgroundImage = "url('StockPic1.jpg')";
      break;
  }

  return (
    <div className={styles.TitleAndNavbar} style={{ backgroundImage }}>
      <div className={styles.LogoAndNavbar}>
        <Image
          src="/hb_logo_text_white.png"
          alt="Happy Buddha Logo"
          width={140}
          height={240}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <div className={styles.Navbar}>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/News" className={pathname === '/News' ? 'active' : ''}>
            Aktuelles
          </Link>
          <Link
            href="/FindUs"
            className={pathname === '/FindUs' ? 'active' : ''}
          >
            Finde Uns
          </Link>
          <Link
            href="/AboutUs"
            className={pathname === '/AboutUs' ? 'active' : ''}
          >
            Über Uns
          </Link>
        </div>
      </div>
    </div>
  );
}
