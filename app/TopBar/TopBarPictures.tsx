'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
/* import { useEffect, useState } from 'react'; */
import styles from '../layout.module.css';
import NavbarMenu from './NavbarMenu';

interface NavbarProps {
  titleText?: string;
  className?: string;
}
export default function TopBarPicture({ titleText }: NavbarProps) {
  const pathname = usePathname();

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
    <div className={styles.HeaderSection} style={{ backgroundImage }}>
      <div className={styles.HbLogo}>
        <Image
          src="/hb_logo_text_white.png"
          alt="Happy Buddha Logo"
          width={140}
          height={240}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <NavbarMenu />
      </div>
      {titleText && (
        <div className={styles.TitleText}>
          <h1>{titleText}</h1>
        </div>
      )}
    </div>
  );
}
