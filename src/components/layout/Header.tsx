"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {pathname.match("/store*") ? (
        <Link href={"../"} className={styles.back}>
          <div className={styles.leftarrow}></div>
          <div>Back to All store</div>
        </Link>
      ) : (
        <div className={styles.contact}>
          <div>
            Call us <br /> +1123476778
          </div>
          <div>
            Write to us <br /> hello@brandname.co
          </div>
        </div>
      )}

      <div className={styles.book}>
        <Link href="#">Book an appointment</Link>
      </div>
    </header>
  );
};

export default Header;
