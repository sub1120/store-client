"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import styles from "./Header.module.css";
import { logout } from "@/config/firebaseAuth";
import "@/config/firebaseApp";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/login") {
    return <></>;
  }

  const handleLogout = async () => {
    try {
      await logout();

      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      router.push("/login");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

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
        <div role="button" className={styles.logout} onClick={handleLogout}>
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
