import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/*Story of Dim-Sum*/}
      <div className={styles.BackgroundImageContainer}>
        <div className={styles.Title}>HAPPY BUDDHA</div>
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
            Cha (tea drinking). Over time, it became a cherished social
            tradition, bringing families and friends together over a variety of
            bite-sized dishes. Today, dim sum is celebrated worldwide, from
            bustling tea houses in Hong Kong to modern restaurants across the
            globe.
          </span>
        </div>

        {/*Experience Section*/}

        <div className={styles.Subtitles}>
          It&apos;s not just food,
          <span className={styles.SubtitlesColor}>
            {' '}
            It&apos;s an experience.
          </span>
        </div>
        <div className={styles.DivisionSection}>
          <div>
            <Image
              src="/Interior1.jpg"
              alt="Picture of tables"
              width={300}
              height={300}
              className={styles.InteriorImage}
            />
            <Image
              src="/Interior2.jpg"
              alt="Picture of Outside Door"
              width={300}
              height={300}
              className={styles.InteriorImage}
            />
            <Image
              src="/Interior3.jpg"
              alt="Picture of Outside Door"
              width={300}
              height={300}
              className={styles.InteriorImage}
            />
          </div>
        </div>

        <div className={styles.Subtitles}>
          Food We <span className={styles.SubtitlesColor}>Serves</span>
          <div className={styles.DescriptionText}>
            We always serve the best and most authentic food dishes all around
            the World
          </div>
        </div>
        <div className={styles.FoodWeServeSection}>
          <div className={styles.OurFoodSectionIcon}>
            <div>
              <Image
                src="/DimSumF5.png"
                alt="Dish 12"
                width="150"
                height="150"
                className={styles.RoundedImage}
              />
            </div>
            DIM-SUM
          </div>
          <div className={styles.OurFoodSectionIcon}>
            <div>
              <Image
                src="/Soup12.png"
                alt="Soup 12"
                width="150"
                height="150"
                className={styles.RoundedImage}
              />
            </div>
            SOUP
          </div>
          <div className={styles.OurFoodSectionIcon}>
            <div>
              <Image
                src="/Dish142.png"
                alt="Dish 12"
                width="150"
                height="150"
                className={styles.RoundedImage}
              />
            </div>
            MAIN DISHES
          </div>
          <div className={styles.OurFoodSectionIcon}>
            <div>
              <Image
                src="/Dish94.png"
                alt="Dish 12"
                width="150"
                height="150"
                className={styles.RoundedImage}
              />
            </div>
            VEGETARIAN
          </div>
          <div className={styles.OurFoodSectionIcon}>
            <div>
              <Image
                src="/DimSumF43.png"
                alt="Dish 12"
                width="150"
                height="150"
                className={styles.RoundedImage}
              />
            </div>
            DESSERT
          </div>
        </div>

        <div className={styles.Subtitles}>
          Dish of the
          <span className={styles.SubtitlesColor}> Month</span>
        </div>
        <div className={styles.DishOfTheMonthSection}></div>
      </div>
    </>
  );
}
