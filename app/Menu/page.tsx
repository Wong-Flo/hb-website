import Navbar from '../Navbar/Navbar';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <>
      <Navbar titleText="this is the Menu Page" />
      <div className={styles.SectionContainer}>
        <div className={styles.SectionLeft}>
          <div className={styles.Kategorie}>
            <span>Getränke</span>
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
        </div>
      </div>
    </>
  );
}
