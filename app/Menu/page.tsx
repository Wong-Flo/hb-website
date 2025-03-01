/* import Image from 'next/image'; */
import Navbar from '../TopBar/TopBarPictures';
import styles from './Menu.module.css';
import MenuTab from './MenuTab';

export default function Menu() {
  return (
    <>
      <Navbar titleText="Speisekarte" />
      <div className={styles.DivisionDivider}>
        <MenuTab />
      </div>
    </>
  );
}
