"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "authenticated") router.push("/");

  return <button onClick={() => signIn("GOOGLE")}>signIn</button>;
};

export default LoginPage;
