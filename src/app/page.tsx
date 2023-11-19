"use client";

import styles from "./page.module.css";
import StoreCard from "../components/cards/StoreCard";
import { IStore } from "@/types";
import useSWR from "swr";
import Loader from "@/components/loader/Loader";

const getData = async (): Promise<IStore[]> => {
  const res = await fetch("http://localhost:4000/api/v1/store", {
    next: { revalidate: 60 },
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token") as string),
    },
  });

  const resObj = await res.json();
  return resObj.data;
};

export default function Home() {
  const { data, error, isLoading } = useSWR("/store", getData);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loader />;

  return (
    <main className={styles.main}>
      <div className={styles.stores}>
        {data?.map((item) => <StoreCard key={item._id} storeData={item} />)}
      </div>
    </main>
  );
}
