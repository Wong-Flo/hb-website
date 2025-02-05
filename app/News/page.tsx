import Link from 'next/link';
import styles from './news.module.css';

export default function News() {
  return (
    <>
      <div className={styles.Container}>
        <h2 className={styles.NewsTitle}>This is the news Page</h2>
        <span className={styles.Date}>Date: </span>

        <span className={styles.selectedDate}>11.November 2022</span>
        <br />
        <span className={styles.Category}>Category: </span>
        <span className={styles.Article}>
          <Link href="https://www.derstandard.at/story/2000140613908/aeltestes-dim-sum-lokal-wiens-happy-buddhas-neue-bleibe">
            <u>Der Standard</u>
          </Link>
        </span>
        <h2 className={styles.NewsTitle}>
          Ältestes Dim-Sum-Lokal Wiens: Happy Buddhas neue Bleibe
        </h2>
        <p className={styles.Paragraph}>
          Wer hier auf der falschen Straßenseite parkt und sich zum Happy Buddha
          durchschlagen muss, kann es nur mit Gottvertrauen versuchen, egal
          welcher Art. Der Stress lohnt sich. Das 1994 etablierte Restaurant
          genoss über Jahre einen Ruf wie Donnerhall – die Dim Sum genannten
          (und "Dim Sam" gesprochenen), typisch südchinesischen, gedämpften,
          frittierten und gebratenen Leckereien in vielfältiger Ausformung, die
          Innereien (Kutteln! Darm!) und Äußereien (Hühnerfüße! Froschschenkel!
          Seegurke!) gab es hier in einer Vielzahl und Qualität....
          <br />
          <Link href="https://www.derstandard.at/story/2000140613908/aeltestes-dim-sum-lokal-wiens-happy-buddhas-neue-bleibe">
            <u>Read More...</u>
          </Link>
        </p>
      </div>
    </>
  );
}
