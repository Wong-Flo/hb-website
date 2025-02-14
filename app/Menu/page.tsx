/* import Image from 'next/image'; */
import Navbar from '../Navbar/Navbar';
import styles from './Menu.module.css';
import MenuTab from './MenuTab';

export default function Menu() {
  return (
    <>
      <Navbar titleText="This is the Menu Page" />
      <div className={styles.DivisionDivider}>
        <MenuTab />
      </div>
    </>
  );
}
