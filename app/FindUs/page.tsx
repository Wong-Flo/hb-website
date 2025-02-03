import styles from './FindUs.module.css';

export default function FindUs() {
  return (
    <div className={styles.OurLocation}>
      <h2>Find us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5319.498618953853!2d16.33495227536371!3d48.19218144735952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da81f177a87af%3A0x886e3b9b7217b8fc!2sHappy%20Buddha!5e0!3m2!1sen!2sat!4v1738078554284!5m2!1sen!2sat"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
