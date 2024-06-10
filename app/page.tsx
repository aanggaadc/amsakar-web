import Image from "next/image";
import SupportForm from "./form";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <section className="relative -mt-[64px] md:-mt-[80px] h-screen font-montserrat bg-[linear-gradient(to_bottom,#074864,#074e6a,#08536f,#085975,#095f7a)]">
        <div className="absolute w-[40%] top-0 left-0 h-full bg-[url('/images/bg-ornament.png')] bg-contain bg-center md:w-[20%] md:max-w-[250px]" />

        <div className="h-full relative z-[1] flex flex-col items-center justify-between pt-[100px] lg:flex-row">
          <div className="w-full md:w-[50%] md:pl-[50px]">
            <Image
              className="w-[100px] block mx-auto lg:w-[200px]"
              src="/logo.png"
              alt="logo"
              width="500"
              height="500"
            />

            <h1 className="font-montserrat text-white text-center text-3xl font-bold text-shadow uppercase mb-2 lg:text-7xl xl:text-8xl">
              Amasakar Achmad
            </h1>

            <p className="w-fit mx-auto uppercase text-xs font-bold text-black rounded-[3px] py-1 px-2 bg-white tracking-[2px] lg:text-2xl xl:text-3xl">
              Calon Wali kota Batam
            </p>
          </div>

          <div className="w-full overflow-hidden md:w-[50%] md:h-full">
            <Image
              className="block md:hidden w-full"
              src="/images/amsakar-mobile.png"
              alt="amsakar"
              width="883"
              height="859"
              priority
            />

            <Image
              className="hidden w-[70%] mx-auto md:block "
              src="/images/amsakar-desktop.png"
              alt="amsakar"
              width="883"
              height="859"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="form"
        className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 font-montserrat"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl text-secondary font-bold leading-9 tracking-tight text-gray-900 md:text-4xl">
            Dukung <br /> <span className="text-primary">Bang Amsakar</span>
          </h2>
        </div>

        <div className="mt-8 mx-auto w-full max-w-sm lg:max-w-lg">
          <SupportForm />
        </div>
      </section>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}
