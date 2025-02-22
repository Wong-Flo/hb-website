'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../layout.module.css';

interface NavbarProps {
  titleText?: string;
  className?: string;
}
export default function Navbar({ titleText }: NavbarProps) {
  const pathname = usePathname();
  /* const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); */
  // Determine the background image based on the current route
  let backgroundImage;
  switch (pathname) {
    case '/':
      backgroundImage = "url('StockPic1.jpg')";
      break;
    case '/Menu':
      backgroundImage = "url('StockPic5.jpg')";
      break;
    case '/Gallery':
      backgroundImage = "url('StockPic2.jpg')";
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
      {/*   <div
      className={`${styles.TitleAndNavbar} ${isNavbarVisible ? styles.navbarVisible : styles.navbarHidden}`}
      style={{ backgroundImage }}
    >  */}
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
          <Link href="/Menu" className={pathname === '/Menu' ? 'active' : ''}>
            Menü
          </Link>
          <Link
            href="/Gallery"
            className={pathname === '/Gallery' ? 'active' : ''}
          >
            Gallery
          </Link>

          <Link
            href="/AboutUs"
            className={pathname === '/AboutUs' ? 'active' : ''}
          >
            Über Uns
          </Link>
        </div>
      </div>
      {titleText && (
        <div className={styles.TitleText}>
          <h1>{titleText}</h1>
        </div>
      )}
    </div>
  );
}
