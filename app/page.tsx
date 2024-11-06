import LandingPage from "@/components/LandingPage";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
  const session = await getServerSession();

  session?.user.role === "ADMIN" ? redirect("/admin") : null;
  session?.user.role === "USER" ? redirect("/home") : null;

  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-950 text-white">
      <LandingPage/>
    </main>
  );
}
