import Navbar from './Navbar/Navbar';
/* <div className={styles.Subtitles}>
        It&apos;s not just food,
        <span className={styles.SubtitlesColor}> It&apos;s an experience.</span>
      </div>
      <div className={styles.DivisionSection}>
        <div>
          <Image
            src="/Interior1.jpg"
            alt="Picture of tables"
            width={250}
            height={250}
            className={styles.InteriorImage}
          />
          <Image
            src="/Interior2.jpg"
            alt="Picture of Outside Door"
            width={250}
            height={250}
            className={styles.InteriorImage}
          />
          <Image
            src="/Interior3.jpg"
            alt="Picture of Outside Door"
            width={250}
            height={250}
            className={styles.InteriorImage}
          />
        </div>
      </div>

      <div className={styles.Subtitles}>
        Food We <span className={styles.SubtitlesColor}>Serves</span>
        <div className={styles.DescriptionText}>
          We always serve the best and most authentic food dishes all around the
          World
        </div>
      </div>
      <div className={styles.FoodWeServeSection}>{scrollFoodWeServe()}</div>

      <div className={styles.Subtitles}>
        Highlights of the
        <span className={styles.SubtitlesColor}> Month</span>
      </div>
      <div className={styles.HighlightsOfTheMonthSection}>
        <div className={styles.HighlightDishes}>{DiaShowOurFood()}</div>
      </div>
      </div>
    </>
  );
}
 */
import styles from './page.module.css';

/* 'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';

const foodWeServe = [
  {
    title: 'Dim-Sum',
    alt: 'DimSumF5',
    src: '/DimSumF5.png',
  },
  {
    title: 'Soup',
    alt: 'Soup12',
    src: '/Soup12.png',
  },
  {
    title: 'Main Dishes',
    alt: 'Dish142',
    src: '/Dish142.png',
  },
  {
    title: 'Vegetarian',
    alt: 'Dish94',
    src: '/Dish94.png',
  },
  {
    title: 'Dessert',
    alt: 'DimSumF43',
    src: '/DimSumF43.png',
  },
];
export default function Home() {
  const [currentDish, setCurrentDish] = useState(0);
  function handleImageChange() {
    setCurrentDish((currentDish + 1) % foodWeServe.length);
  }
  function DiaShowOurFood() {
    const currentFood = foodWeServe[currentDish];
    return (
      <div className={styles.HighlightRoundedImage} onClick={handleImageChange}>
        <Image
          src={currentFood.src}
          alt={currentFood.alt}
          width="200"
          height="200"
        />
      </div>
    );
  }
  const scrollFoodWeServe = () => {
    return foodWeServe.concat(foodWeServe).map((item, index) => (
      <div key={index} className={styles.OurFoodSectionIcon}>
        <Image
          src={item.src}
          alt={item.alt}
          width="100"
          height="100"
          className={styles.RoundedImage}
        />
        {item.title}
      </div>
    ));
  };
  return (
    <>
      {/*Story of Dim-Sum*/
/* <div className={styles.BackgroundImageContainer}> */
/*
      <div className={styles.Subtitles}>
        Story of
        <span className={styles.SubtitlesColor}> Dim-Sum</span>
      </div>
      <div className={styles.StorySection}>
        <span className={styles.StoryDescription}>
          The Story of Dim-Sum, is a centuries-old culinary tradition that
          originated in China’s Guangdong province. Initially created as small
          snacks to accompany tea for weary travelers, Dim-Sum evolved into a
          cultural staple, blending exquisite flavors with the practice of Yum
          Cha (tea drinking). Over time, it became a cherished social tradition,
          bringing families and friends together over a variety of bite-sized
          dishes. Today, dim sum is celebrated worldwide, from bustling tea
          houses in Hong Kong to modern restaurants across the globe.
        </span>
      </div>
*/
{
  /*Experience Section*/
}

export default function Home() {
  return (
    <>
      <Navbar titleText="Welcome to Happy Buddha" />
      <div className={styles.TitleText}></div>
    </>
  );
}
