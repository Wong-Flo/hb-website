import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*NAVBAR*/}
      <div className={styles.TopNavBar}>
        <Link href="/">Home</Link>
        <a href="/news">News</a>
        <Link href="/contact">Contact</Link>
        <a href="/about">About</a>
      </div>
      {/*Story of Dim-Sum*/}
      <div className={styles.Subtitles}>
        Story of
        <span className={styles.SubtitlesColor}> Dim-Sum</span>
      </div>
      <div className={styles.StorySection}>
        <span className={styles.StoryDescription}>
          The Story of Dim-Sum, is a centuries-old culinary tradition that
          originated in China’s Guangdong province. Initially created as small
          snacks to accompany tea for weary travelers, Dim-Sum evolved into a
          cultural staple, blending exquisite flavors with the practice of{' '}
          <strong>Yum Cha </strong>(tea drinking). Over time, it became a
          cherished social tradition, bringing families and friends together
          over a variety of bite-sized dishes. Today, dim sum is celebrated
          worldwide, from bustling tea houses in Hong Kong to modern restaurants
          across the globe.
        </span>
      </div>
      {/*Experience Section*/}
      <div className={styles.Subtitles}>
        It&apos;s not just food,
        <span className={styles.SubtitlesColor}> It&apos;s an experience.</span>
      </div>
      <div className={styles.DivisionSection}>BannerPicture</div>

      <div className={styles.Subtitles}>
        Food We <span className={styles.SubtitlesColor}>Serves</span>
        <div className={styles.DescriptionText}>
          We always serve the best and most authentic food dishes all around the
          World
        </div>
      </div>
      <div className={styles.FoodWeServeSection}>
        <div className={styles.OurFoodSectionIcon}>
          <div className={styles.RoundedImage}></div>Food Type
        </div>
        <div className={styles.OurFoodSectionIcon}>
          <div className={styles.RoundedImage}></div>Food Type
        </div>
        <div className={styles.OurFoodSectionIcon}>
          <div className={styles.RoundedImage}></div>Food Type
        </div>
        <div className={styles.OurFoodSectionIcon}>
          <div className={styles.RoundedImage}></div>Food Type
        </div>
      </div>

      <div className={styles.Subtitles}>
        Dish of the
        <span className={styles.SubtitlesColor}> Month</span>
      </div>
      <div className={styles.DishOfTheMonthSection}></div>
    </>
  );
}
