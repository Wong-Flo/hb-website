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
          Tagesmenü
        </button>
        <button
          className={activeTab === 3 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(3)}
        >
          Dim-Sum
        </button>
        <button
          className={activeTab === 4 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(4)}
        >
          Vorspeisen
        </button>
        <button
          className={activeTab === 5 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(5)}
        >
          Hauptspeise
        </button>
        <button
          className={activeTab === 6 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(6)}
        >
          Vegetarisch
        </button>
        <button
          className={activeTab === 7 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(7)}
        >
          Reis & Nudeln
        </button>
        <button
          className={activeTab === 8 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(8)}
        >
          Nachspeise
        </button>
      </div>
      <div className={styles.MenuTabsContent}>
        <div
          className={
            activeTab === 0 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {menuArray.map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 1 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('Getränke').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 2 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('TagesMenü').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 3 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('DimSum').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 4 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('Vorspeisen').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 5 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('Hauptspeise').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 6 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('Vegetarisch').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 7 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('ReisNudeln').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
        </div>
        <div
          className={
            activeTab === 8 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          {filterImagesByCategory('Nachspeise').map((image) => (
            <div key={image.id} className={styles.ImageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={85}
                onClick={() => openModal(image.src, image.alt, 480, 480)}
                className={styles.Image}
                style={{ cursor: 'pointer' }}
              />{' '}
            </div>
          ))}
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
