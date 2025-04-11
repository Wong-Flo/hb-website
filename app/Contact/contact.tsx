import Link from 'next/link';
import { FaGoogle, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';
import styles from './contact.module.css';

export default function ContactSection() {
  return (
    <div className={styles.ContactSection}>
      {/* <h2>Kontakt</h2>
      <div>Mariahilfergürtel 17 </div> <div> 1150 Wien </div>
      <div>+43-1-8934217</div> */}
      <div className={styles.LogoSection}></div>
      <Link
        href="https://www.instagram.com/happybuddha.wien/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.Icon} />
      </Link>
      <Link
        href="https://www.facebook.com/TheHappyBuddha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMeta className={styles.Icon} />
      </Link>
      <Link
        href="https://www.tripadvisor.com/Restaurant_Review-g190454-d788083-Reviews-Happy_Buddha-Vienna.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTripadvisor className={styles.Icon} />
      </Link>
      <Link
        href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSctOSTEwMGC0UjWoMDE3S0m0MEwzNDdPtDBPTLMyqLCwMEs1TrJMMjcyNE-ySEv24slILCioVEgqTUnJSAQAaiATbQ&q=happy+buddha&oq=happybuddh&gs_lcrp=EgZjaHJvbWUqEggCEC4YChivARjHARiABBiOBTIGCAAQRRg5MgYIARBFGDsyEggCEC4YChivARjHARiABBiOBTIJCAMQABgKGIAEMgkIBBAAGAoYgAQyBwgFEAAYgAQyFQgGEC4YChivARjHARiABBiYBRiaBTIPCAcQLhgKGK8BGMcBGIAEMg8ICBAuGAoYrwEYxwEYgAQyCQgJEAAYChiABNIBCTQxNjZqMGoxNagCCbACAfEFhwiQNW62X2o&sourceid=chrome&ie=UTF-8
"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle className={styles.Icon} />
      </Link>
    </div>
  );
}
