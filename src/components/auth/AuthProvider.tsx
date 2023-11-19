"use client";

import { getAuthStatus } from "@/config/firebaseAuth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getAuthStatus(async (user: User) => {
      if (user) {
        setLoading(true);
        const token = await user.getIdToken();

        if (typeof window !== "undefined") {
          localStorage.setItem("token", JSON.stringify(token));
        }
        setLoading(false);
      } else {
        console.log("user is logged out");
        router.push("/login");
      }
    });
  }, [router]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <>{children}</>;
};

export default AuthProvider;
