import Image from "next/image";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-[98] bg-[#001f2d3d] backdrop-blur-sm">
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
