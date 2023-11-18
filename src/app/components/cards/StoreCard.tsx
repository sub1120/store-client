import styles from "./StoreCard.module.css";

const StoreCard = () => {
  return (
    <div className={styles.card}>
      {/* store image */}
      <div className={styles.image}>Indiranagar Branch</div>

      {/* store details */}
      <div className={styles.details}>
        {/* basic details */}
        <div className={styles.basic}>
          <h2 className={styles.name}>Indiranagar Branch</h2>
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
          <button className={styles.show}>Open - Closes at 8 PM</button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
