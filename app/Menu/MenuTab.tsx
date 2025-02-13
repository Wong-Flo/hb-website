'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Menu.module.css';

export default function MenuTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.MenuTabContainer}>
      <div className={styles.MenuTabCategory}>
        <button
          className={activeTab === 0 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(0)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 1 ? styles.MenuTabActive : styles.MenuTab}
          onClick={() => setActiveTab(1)}
        >
          Tab 2
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
      </div>
      <div className={styles.MenuTabsContent}>
        <div
          className={
            activeTab === 0 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 1
          <Image src="/DimSumF2.jpeg" alt="dimsumF2" width={240} height={240} />
        </div>
        <div
          className={
            activeTab === 1 ? styles.MenuContentActive : styles.MenuContent
          }
        >
          Content for Tab 2
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
      </div>
    </div>
  );
}
