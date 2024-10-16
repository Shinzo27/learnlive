"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {  
      const signin = await signIn("credentials", {
        email,
        password,
        redirect: false
      });
      if(signin?.ok){
        toast.success("Logged in successfully");
        router.push('/home')
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const githubLoginHandler = async(e: any) => {
    e.preventDefault();
    const signin = await signIn("github");
    if(signin?.ok){
      toast.success("Logged in successfully");
      router.push('/home')
    }
  };

  if(session?.data?.user) {
    return router.push('/home')
  }
  
  return isLoading ? <Loader /> : (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Sign In to LearnLive
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-neutral-800 border-neutral-700 text-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <Button
              type="submit"
              className="w-full bg-neutral-700 hover:bg-neutral-500 text-white mt-5"
              onClick={githubLoginHandler}
            >
              Login with Github
              <Github className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-4 text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
