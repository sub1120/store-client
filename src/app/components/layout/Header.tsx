import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contact}>
        <div>
          Call us <br /> +1123476778
        </div>
        <div>
          Write to us <br /> hello@brandname.co
        </div>
      </div>
      <div className={styles.book}>
        <Link href="#">Book an appointment</Link>
      </div>
    </header>
  );
};

export default Header;
