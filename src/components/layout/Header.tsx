"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import "@/config/firebaseApp";
import { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("token") as string);
    console.log(accessToken);
    if (!accessToken) {
      alert("Login expired, please login");
      router.push("/login");
    }
  }, [router]);

  if (pathname === "/login") {
    return <></>;
  }

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

      <div className={styles.headerRight}>
        <Link href="#" className={styles.book}>
          Book an appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;
