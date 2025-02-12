import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import styles from './Menu.module.css';

export default function Menu() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Navbar titleText="this is the Menu Page" />
      <div className={styles.DivisionDivider}>
        <Image
          src="/StockPic6.jpg"
          alt="Cartoon Picture of dinner Table and a Dim-sum Cart"
          layout="fill"
        />
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
        <div className={styles.SectionRight}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl="/Speisekarte.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </>
  );
}
