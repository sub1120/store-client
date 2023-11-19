"use client";

import useSWR from "swr";

import Loader from "@/components/loader/Loader";
import StoreCard from "@/components/cards/StoreCard";
import styles from "./page.module.css";
import storeAPI from "@/api";
import { IStore } from "@/types";

export default function Home() {
  const { data, error, isLoading } = useSWR<IStore[]>(
    "/store",
    storeAPI.getData
  );

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
