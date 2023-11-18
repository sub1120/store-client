import Link from "next/link";
import styles from "./StoreCard.module.css";
import Dropdown from "../dropdown/Dropdown";
import { IStore } from "@/types";
import formatTime from "@/utils/formatTime";

const StoreCard = ({ storeData }: { storeData: IStore }) => {
  const storeTimings = storeData.timing;

  return (
    <div className={styles.card}>
      {/* store image */}
      <Link href="/store">
        <div className={styles.image}>{storeData.name}</div>
      </Link>

      {/* store details */}
      <div className={styles.details}>
        {/* basic details */}
        <div className={styles.basic}>
          <Link href="/store">
            <h2 className={styles.name}>{storeData.name}</h2>
          </Link>
          <p className={styles.address}>{storeData.address}</p>
          <div className={styles.contact}>
            <div>{storeData.phoneNumber}</div>
            <div>{storeData.email}</div>
          </div>
        </div>

        {/* store timings */}
        <div className={styles.timings}>
          <Dropdown buttonText={storeData.storeStatus}>
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
  );
};

export default StoreCard;
