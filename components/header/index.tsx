"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "./navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[98] transition-all duration-500 ease-in-out",
        isScrolled && "bg-[#001f2d3d] backdrop-blur-sm"
      )}
    >
      <div className="max-w-screen-xl mx-auto py-2 px-4 flex items-center justify-between">
        <Image
          className="w-12 md:w-16"
          src="/logo-small.png"
          alt="amaskar"
          width="500"
          height="500"
        />

        <Navigation />
      </div>
    </header>
  );
}
