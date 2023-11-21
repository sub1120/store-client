"use client";

import google from "@/assets/logos/google.png";
import styles from "./page.module.css";
import Image from "next/image";
import storeAPI from "@/api";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await storeAPI.signIn();

      router.push("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.brand}>Brand Logo/Name</div>
        <div role="button" className={styles.login} onClick={handleLogin}>
          <Image src={google} alt="google logo" width={24} />
          <div>Sign In with Google</div>
        </div>
      </div>
    </main>
  );
};

export default Login;
