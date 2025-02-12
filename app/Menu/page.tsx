'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '../Navbar/Navbar';
import styles from './Menu.module.css';

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`;

export default function Menu() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Navbar titleText="This is the Menu Page" />
      <div className={styles.DivisionDivider}>
        <Image
          src="/StockPic6.jpg"
          alt="Cartoon Picture of dinner Table and a Dim-sum Cart"
          layout="fill"
          objectFit="cover"
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
          <Document
            file="/Speisekarte.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
            <button
              disabled={numPages === null || pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
