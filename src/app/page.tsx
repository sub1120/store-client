import styles from "./page.module.css";
import StoreCard from "../components/cards/StoreCard";
import { IStoreManyResponse } from "@/types";

async function getData(): Promise<IStoreManyResponse> {
  const res = await fetch("http://localhost:4000/api/v1/store", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const response = await getData();
  const data = response.data;

  console.log(data);

  return (
    <main className={styles.main}>
      <div className={styles.stores}>
        {data.map((item) => (
          <StoreCard key={item._id} storeData={item} />
        ))}
      </div>
    </main>
  );
}
