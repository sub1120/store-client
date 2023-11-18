import styles from "./page.module.css";
import StoreCard from "../components/cards/StoreCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.stores}>
        {Array(5)
          .fill("")
          .map((item, index) => (
            <StoreCard key={index} />
          ))}
      </div>
    </main>
  );
}
