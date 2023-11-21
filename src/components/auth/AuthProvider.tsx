"use client";

import storeAPI from "@/api";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [auth, setAuth] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    storeAPI.getAuthStatus(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setAuth(token);
      } else {
        setAuth(null);
        console.log("user is logged out");
        router.push("/login");
      }
    });

    setLoading(false);
  }, [router]);

  // If public route
  if (pathname === "/login") {
    return <>{isLoading ? <Loader /> : !auth && children}</>;
  }

  // If protected route
  return <>{isLoading ? <Loader /> : auth && <>{children}</>}</>;
};

export default AuthProvider;
