"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const redirectHandler = () => {
        window.open("https://github.com/Shinzo27/learnlive.git", "_blank");
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-neutral-950 text-white font-bold">
      <div className="flex items-center justify-between h-16 px-4 sm:px-8">
        {/* Logo Section */}
        <div className="text-2xl pl-5">
          <Link href="/">LearnLive</Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden sm:flex items-center space-x-7 px-4">
          <button onClick={redirectHandler} className="decoration-transparent">
            Github
          </button>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 pb-4">
          <button onClick={redirectHandler} className="decoration-transparent">
            Github
          </button>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </nav>
    );
}

export default AppBar;