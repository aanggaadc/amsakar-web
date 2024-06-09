import Image from "next/image";

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

        <nav>
          <ul className="flex items-center">
            <li>
              <button className="font-montserrat text-sm md:text-base p-2 rounded-md text-white bg-[linear-gradient(to_right,#074864,#074e6a,#08536f,#085975,#095f7a)]">
                Dukung Bang Amsakar
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
