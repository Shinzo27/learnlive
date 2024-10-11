"use client";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectHandler = () => {
    window.open("https://github.com/Shinzo27/learnlive.git", "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const session = true;

  return (
    <nav className="bg-neutral-950 text-white font-bold">
      <div className="flex items-center justify-between h-16 px-4 sm:px-8">
        {/* Logo Section */}
        <div className="flex gap-2 text-2xl pl-5">
          <GraduationCap className="h-8 w-8 text-blue-500" />
          <Link href="/">LearnLive</Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items */}
        {!session ? (
          <div className="hidden sm:flex items-center space-x-7 px-4">
            <button
              onClick={redirectHandler}
              className="decoration-transparent"
            >
              Github
            </button>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/signin">Signin</Link>
          </div>
        ) : (
          <div className="hidden sm:flex items-center space-x-7 px-4">
            <Link href="/home">Home</Link>
            <Link href="/bookmarks">Bookmarks</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/logout">Logout</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        !session ? (
      <div className="sm:hidden flex flex-col items-center space-y-4 pb-4">
          <button onClick={redirectHandler} className="decoration-transparent">
            Github
          </button>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/signin">Signin</Link>
        </div>
      ) : (
        <div className="sm:hidden flex flex-col items-center space-y-4 pb-4">
          <Link href="/home">Home</Link>
            <Link href="/bookmarks">Bookmarks</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/logout">Logout</Link>
        </div>
      )
    )}
    </nav>
  );
};

export default AppBar;
