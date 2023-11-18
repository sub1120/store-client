import Dropdown from "@/components/dropdown/Dropdown";
import styles from "./page.module.css";

const Store = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {/* store image */}
        <div className={styles.image}>Indiranagar Branch</div>

        {/* store details */}
        <div className={styles.details}>
          {/* basic details */}
          <div className={styles.basic}>
            <h2 className={styles.name}>Indiranagar Branch</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed
              feugiat pellentesque sed. Erat vitae cras eleifend consequat
              euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu
              enim nibh. Ornare viverra risus felis amet odio neque amet in
              nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare
              viverra risus felis amet odio neque amet in nunc. Id netus
              vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis
              amet odio neque amet in nunc.
            </p>
          </div>

          <div className={styles.advance}>
            {/* contact details */}
            <div className={styles.contact}>
              <h2 className={styles.heading}>Contact Details</h2>
              <p className={styles.address}>
                Street/Area name, <br /> Code/State, <br /> Country
              </p>
              <div>
                <div>+1234653111</div>
                <div>hello@loaction.co</div>
              </div>
            </div>

            {/* store timings */}
            <div className={styles.timings}>
              <h2 className={styles.heading}>Store Timings</h2>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Store;
