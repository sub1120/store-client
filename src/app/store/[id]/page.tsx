"use client";

import Dropdown from "@/components/dropdown/Dropdown";
import styles from "./page.module.css";
import formatTime from "@/utils/formatTime";
import useSWR from "swr";
import Loader from "@/components/loader/Loader";
import storeAPI from "@/api";
import { IStore } from "@/types";

const Store = ({ params }: { params: { id: string } }) => {
  const { data, error, isLoading } = useSWR<IStore>(
    `store/${params.id}`,
    storeAPI.getStoreData
  );

  if (error) {
    throw error;
  }

  if (isLoading) return <Loader />;

  if (!data) {
    throw new Error("Failed to load");
  }

  const storeTimings = data.timing;

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {/* store image */}
        <div className={styles.image}>{data.name}</div>

        {/* store details */}
        <div className={styles.details}>
          {/* basic details */}
          <div className={styles.basic}>
            <h2 className={styles.name}>{data.name}</h2>
            <p className={styles.desc}>{data.description}</p>
          </div>

          <div className={styles.advance}>
            {/* contact details */}
            <div className={styles.contact}>
              <h2 className={styles.heading}>Contact Details</h2>
              <p className={styles.address}>{data.address}</p>
              <div>
                <div>{data.phoneNumber}</div>
                <div>{data.email}</div>
              </div>
            </div>

            {/* store timings */}
            <div className={styles.timings}>
              <h2 className={styles.heading}>Store Timings</h2>
              {/* store timings */}
              <Dropdown buttonText={data.storeStatus}>
                <div className={styles.item}>
                  <span>Monday</span>
                  <span>{formatTime(storeTimings.monday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Tuesday</span>
                  <span>{formatTime(storeTimings.tuesday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Wednessday</span>
                  <span>{formatTime(storeTimings.wednessday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Thursday</span>
                  <span>{formatTime(storeTimings.thursday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Friday</span>
                  <span>{formatTime(storeTimings.friday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Saturday</span>
                  <span>{formatTime(storeTimings.saturday)}</span>
                </div>
                <div className={styles.item}>
                  <span>Sunday</span>
                  <span>{formatTime(storeTimings.sunday)}</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Store;
