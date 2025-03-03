import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function NavbarMenu() {
  const pathname = usePathname();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Hide navbar when scrolling down
      } else {
        setIsNavbarVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${styles.Navbar} ${isNavbarVisible ? styles.navbarVisible : styles.navbarHidden}`}
    >
      <Link href="/" className={pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/Menu" className={pathname === '/Menu' ? 'active' : ''}>
        Menü
      </Link>
      <Link href="/Gallery" className={pathname === '/Gallery' ? 'active' : ''}>
        Gallery
      </Link>
      <Link href="/AboutUs" className={pathname === '/AboutUs' ? 'active' : ''}>
        Über Uns
      </Link>
    </div>
  );
}
