import Navbar from '../Navbar/Navbar';
import styles from './Impressum.module.css';

export default function Impressum() {
  return (
    <>
      <Navbar titleText="Impressum" />
      <div className={styles.ImpressumContainer}>
        <h3>Gem. §14 UGB und § 5 E-Commerce-Gesetz:</h3>
        <strong>Firmenname:</strong> W57 Gesellschaft m.b.H
        <br />
        <strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung
        <br />
        <strong>Sitz:</strong> Wien <br />
        <strong>Kammer:</strong> Gastronomie, Fachgruppe Wien <br />
        <strong>Umsatzsteuer-Identifikationsnummer:</strong> UID ATU 67715225
        <br />
        <strong>Firmenbuchnummer:</strong> FN 386694V <br />
        <strong>Firmenbuchgericht:</strong> Handelsgericht Wien <br />
      </div>
    </>
  );
}
