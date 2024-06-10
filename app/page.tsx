import Image from "next/image";
import { InputField } from "@/components/input-field";
import { TextArea } from "@/components/text-area";
import { ButtonSubmit } from "@/components/button-submit";

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

      <section className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 font-montserrat">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl text-secondary font-bold leading-9 tracking-tight text-gray-900 md:text-4xl">
            Dukung <br /> <span className="text-primary">Bang Amsakar</span>
          </h2>
        </div>

        <div className="mt-8 mx-auto w-full max-w-sm lg:max-w-lg">
          <form className="space-y-6">
            <InputField
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              label="Nama"
              id="nama"
              name="nama"
              type="text"
              autoComplete="off"
              required
            />

            <InputField
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              label="Nomor Telepon"
              id="phone"
              name="phone"
              type="number"
              autoComplete="off"
              required
            />

            <TextArea
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              label="Komentar"
              id="komentar"
              name="komentar"
              required
              autoComplete="off"
            />

            {/* {formState.code !== 200 && (
        <p className="text-sm text-center text-[red] !mt-4">
          {formState.message}
        </p>
      )} */}

            <ButtonSubmit
              type="submit"
              className="block w-full rounded-md font-montserrat text-white bg-primary hover:bg-secondary transition-[background] duration-300"
            >
              Kirim
            </ButtonSubmit>
          </form>
        </div>
      </section>
    </>
  );
}
