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
        {/*   <div className={styles.FoodCategoryTab}></div>
         <Image
          src="/StockPic6.jpg"
          alt="dinner Table with different kinds of Dim-Sum"
          layout="fill"
          objectFit="cover"
        />*/}
      </div>
      <div className={styles.SectionContainer}>
        <div className={styles.SectionLeft}>
          <div className={styles.Kategorie}>
            <span>Getränke</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Tagesmenü</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Dim-Sum</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Vorspeisen</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Rice</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Hauptspeisen</span>
          </div>
          <div className={styles.Kategorie}>
            <span>Nachspeisen</span>
          </div>
        </div>
        <div className={styles.SectionRight}></div>
      </div>
    </>
  );
}
