import Dropdown from "@/components/dropdown/Dropdown";
import styles from "./page.module.css";
import { IStoreOneResponse } from "@/types";
import formatTime from "@/utils/formatTime";

async function getStoreData(id: string): Promise<IStoreOneResponse> {
  const res = await fetch(`http://localhost:4000/api/v1/store/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Store = async ({ params }: { params: { id: string } }) => {
  const response = await getStoreData(params.id);
  const storeData = response.data;
  const storeTimings = storeData.timing;

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {/* store image */}
        <div className={styles.image}>{storeData.name}</div>

        {/* store details */}
        <div className={styles.details}>
          {/* basic details */}
          <div className={styles.basic}>
            <h2 className={styles.name}>{storeData.name}</h2>
            <p className={styles.desc}>{storeData.description}</p>
          </div>

          <div className={styles.advance}>
            {/* contact details */}
            <div className={styles.contact}>
              <h2 className={styles.heading}>Contact Details</h2>
              <p className={styles.address}>{storeData.address}</p>
              <div>
                <div>{storeData.phoneNumber}</div>
                <div>{storeData.email}</div>
              </div>
            </div>

            {/* store timings */}
            <div className={styles.timings}>
              <h2 className={styles.heading}>Store Timings</h2>
              {/* store timings */}
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
      </div>
    </main>
  );
};

export default Store;
