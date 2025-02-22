import Navbar from '../Navbar/Navbar';
import styles from './gallery.module.css';

export default function News() {
  return (
    <>
      <Navbar titleText="Unsere Gallery" />
      <div className={styles.Container}>
        <div className={styles.GridItem}>1</div>
        <div className={styles.GridItem}>2</div>
        <div className={styles.GridItem}>3</div>
        <div className={styles.GridItem}>4</div>
        <div className={styles.GridItem}>5</div>
        <div className={styles.GridItem}>6</div>
        <div className={styles.GridItem}>7</div>
        <div className={styles.GridItem}>8</div>
        <div className={styles.GridItem}>9</div>
        <div className={styles.GridItem}>10</div>
        {/* Add more grid items as needed */}
      </div>
    </>
  );
}
