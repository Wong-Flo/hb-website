import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.BackgroundImageContainer}>
      <div className={styles.ContactPage}>
        <div className={styles.OpeningContainer}>
          <table className={styles.OpeningTimesTable}>
            <tbody>
              <tr>
                <td>Monday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
              <tr>
                <td>Tuesday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
              <tr>
                <td>Wednesday:</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Thursday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
              <tr>
                <td>Friday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>
                  11:30 - 14:30 <br /> 17:30 - 21:30
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.OurLocation}>
            <h2>You can find us here:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5319.498618953853!2d16.33495227536371!3d48.19218144735952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da81f177a87af%3A0x886e3b9b7217b8fc!2sHappy%20Buddha!5e0!3m2!1sen!2sat!4v1738078554284!5m2!1sen!2sat"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
