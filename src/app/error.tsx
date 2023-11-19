"use client";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <main className={styles.main}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
