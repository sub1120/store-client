"use client";
import google from "@/assets/logos/google.png";

import styles from "./page.module.css";
import { signInWithGoogle } from "@/config/firebaseAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("token") as string);
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const handleLogin = async () => {
    try {
      const { token } = await signInWithGoogle();

      if (typeof window !== "undefined") {
        localStorage.setItem("token", JSON.stringify(token));
      }
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
