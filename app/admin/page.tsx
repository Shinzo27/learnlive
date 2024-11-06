import Dashboard from "@/components/admin/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async() => {
  const session = await getServerSession();
  if (!session?.user?.role || session?.user?.role !== "ADMIN") {
    return redirect("/");
  }
  return (
    <Dashboard/>
  );
};

export default page;
