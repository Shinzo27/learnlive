import LandingPage from "@/components/LandingPage";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession(NEXT_AUTH);

  session?.user.role === "ADMIN" ? redirect("/admin") : null;
  session?.user.role === "USER" ? redirect("/home") : null;

  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-950 text-white">
      <LandingPage/>
    </main>
  );
}
