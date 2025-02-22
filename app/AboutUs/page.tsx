import Navbar from '../Navbar/Navbar';
import styles from './aboutus.module.css';

export default function AboutUs() {
  return (
    <>
      <Navbar titleText="Unsere Geschichte" />
      <div className={styles.aboutUsContainer}>
        <p>
          Willkommen im Happy Buddha, einem renommierten Dim-Sum-Restaurant, das
          vor über 30 Jahren im Herzen Wiens gegründet wurde. Unsere Reise
          begann mit einer Leidenschaft für authentische chinesische Küche und
          dem Engagement, die reichen Aromen von Dim Sum in die lebendige Stadt
          Wien zu bringen.
        </p>
        <p>
          Seit drei Jahrzehnten ist Happy Buddha ein beliebtes Ziel für
          Einheimische und Touristen, die ein unvergessliches kulinarisches
          Erlebnis suchen. Unser Menü bietet eine breite Palette traditioneller
          Dim-Sum-Gerichte, die mit den besten Zutaten und überlieferten
          Rezepten, die von Generation zu Generation weitergegeben wurden,
          sorgfältig zubereitet werden.
        </p>
        <p>
          Im Happy Buddha sind wir stolz auf unsere warme und einladende
          Atmosphäre, in der Gäste eine köstliche Mahlzeit mit Familie und
          Freunden genießen können. Unsere erfahrenen Köche bereiten jedes
          Gericht mit Sorgfalt zu, sodass jeder Bissen ein Fest der Aromen und
          Traditionen ist.
        </p>
        <p>
          Egal, ob Sie ein Dim-Sum-Enthusiast oder ein Erstbesucher sind, wir
          laden Sie ein, uns im Happy Buddha zu besuchen und die Aromen zu
          erleben, die uns seit 30 Jahren zu einem festen Bestandteil der Wiener
          Gastronomieszene gemacht haben. Vielen Dank, dass Sie Teil unserer
          Reise sind, und wir freuen uns darauf, Sie auch in den kommenden
          Jahren zu bedienen.
        </p>
      </div>
    </>
  );
}
