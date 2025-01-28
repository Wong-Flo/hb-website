import styles from './maps.module.css';

export default function Maps() {
  return (
    <>
      <div>This page shows opening times and maps and anfahrt</div>
      <div>
        <h1>Opening Times</h1>
        <table className={styles.OpeningTimesTable}>
          <tbody>
            <tr>
              <td>Monday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
            <tr>
              <td>Tuesday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
            <tr>
              <td>Wednesday:</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Thursday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
            <tr>
              <td>Friday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
            <tr>
              <td>Saturday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>11:30 - 14:30 & 17:30 - 21:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
