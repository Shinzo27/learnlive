import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-950">
      <Button className="bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 border border-white text-white">Hello world</Button>
    </div>
  );
}
