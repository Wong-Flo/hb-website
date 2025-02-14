'use client';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from './ImageModal';
import styles from './Menu.module.css';
import { menuArray } from './MenuArray';

export default function MenuTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');
  const [modalImageWidth, setModalImageWidth] = useState(0);
  const [modalImageHeight, setModalImageHeight] = useState(0);

  const openModal = (
    src: string,
    alt: string,
    width: number,
    height: number,
  ) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setIsModalOpen(true);
    setModalImageWidth(width);
    setModalImageHeight(height);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const filterImagesByCategory = (category: string) => {
    return menuArray.filter((image) => image.category === category);
  };
  return (
    <div className={styles.MenuTabContainer}>
      <div className={styles.MenuTabCategory}>
        <button
          className={activeTab === 0 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(0)}
        >
          Alle
        </button>
        <button
          className={activeTab === 1 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(1)}
        >
          Getränke
        </button>
        <button
          className={activeTab === 2 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(2)}
        >
          Tab 3
        </button>
        <button
          className={activeTab === 3 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(3)}
        >
          Tab 4
        </button>
        <button
          className={activeTab === 4 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(4)}
        >
          Tab 5
        </button>
        <button
          className={activeTab === 5 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(5)}
        >
          Tab 6
        </button>
        <button
          className={activeTab === 6 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(6)}
        >
          Tab 7
        </button>
        <button
          className={activeTab === 7 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(7)}
        >
          Tab 8
        </button>
      </div>
      <div className={styles.MenuTabsContent}>
        <div
          className={
            activeTab === 0 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {menuArray.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={85}
              onClick={() => openModal(image.src, image.alt, 480, 480)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <div
          className={
            activeTab === 1 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          <Image
            src="/MenuImages/MenuPage2.jpg"
            alt="Drinks Menu"
            width={240}
            height={240}
            quality={85}
            onClick={() =>
              openModal('/MenuImages/MenuPage2.jpg', 'Drinks Menu', 480, 480)
            }
            style={{ cursor: 'pointer' }}
          />
          <Image
            src="/MenuImages/MenuPage3.jpg"
            alt="Drinks Menu"
            width={240}
            height={240}
            quality={85}
            onClick={() =>
              openModal('/MenuImages/MenuPage3.jpg', 'Drinks Menu', 480, 480)
            }
            style={{ cursor: 'pointer' }}
          />
          <Image
            src="/MenuImages/MenuPage4.jpg"
            alt="Drinks Menu"
            width={240}
            height={240}
            quality={85}
            onClick={() =>
              openModal('/MenuImages/MenuPage4.jpg', 'Drinks Menu', 480, 480)
            }
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          className={
            activeTab === 2 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 3
        </div>
        <div
          className={
            activeTab === 3 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 4
        </div>
        <div
          className={
            activeTab === 4 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 5
        </div>
        <div
          className={
            activeTab === 5 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 6
        </div>
        <div
          className={
            activeTab === 6 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 7
        </div>
        <div
          className={
            activeTab === 7 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 8
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          src={modalImageSrc}
          alt={modalImageAlt}
          width={modalImageWidth}
          height={modalImageHeight}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
