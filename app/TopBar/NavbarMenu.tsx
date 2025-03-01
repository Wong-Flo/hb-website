import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../layout.module.css';

export default function NavbarMenu() {
  const pathname = usePathname();
  return (
    <div className={styles.Navbar}>
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
