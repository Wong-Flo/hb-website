/* import Image from 'next/image'; */
import Navbar from '../Navbar/Navbar';
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
