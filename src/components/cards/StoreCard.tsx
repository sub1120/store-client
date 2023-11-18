import Link from "next/link";
import styles from "./StoreCard.module.css";
import Dropdown from "../dropdown/Dropdown";

const StoreCard = () => {
  return (
    <div className={styles.card}>
      {/* store image */}
      <Link href="/store">
        <div className={styles.image}>Indiranagar Branch</div>
      </Link>

      {/* store details */}
      <div className={styles.details}>
        {/* basic details */}
        <div className={styles.basic}>
          <Link href="/store">
            <h2 className={styles.name}>Indiranagar Branch</h2>
          </Link>
          <p className={styles.address}>
            Street/Area name, <br /> Code/State, <br /> Country
          </p>
          <div className={styles.contact}>
            <div>+1234653111</div>
            <div>hello@loaction.co</div>
          </div>
        </div>

        {/* store timings */}
        <div className={styles.timings}>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
