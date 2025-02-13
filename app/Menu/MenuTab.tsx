import styles from './Menu.module.css';

export default function MenuTab() {
  return (
    <div className={styles.MenuTabContainer}>
      <div className={styles.MenuTabCategory}>
        <button className={styles.MenuTabActive}>Tab 1</button>
        <button className={styles.MenuTab}>Tab 2</button>
        <button className={styles.MenuTab}>Tab 3</button>
        <button className={styles.MenuTab}>Tab 4</button>
      </div>
    </div>
  );
}
