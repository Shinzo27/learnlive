"use client"
import LandingPage from "@/components/LandingPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  session ? router.push('/home') : null;

  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-950 text-white">
      <LandingPage/>
    </main>
  );
}
