"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { sendForm } from "@/actions";
import { InputField, TextArea, ButtonSubmit } from "@/components/shared";

export default function SupportForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(sendForm, {
    code: null,
    message: "",
    status: "idle",
  });

  useEffect(() => {
    if (formState.code === 200) {
      formRef.current?.reset();
      toast.success("Pesan berhasil dikirim!", {
        duration: 5000,
      });
    }
  }, [formState]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <InputField
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        label="Nama"
        id="nama"
        name="Nama"
        type="text"
        autoComplete="off"
        required
      />

      <InputField
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        label="Nomor Telepon"
        id="phone"
        name="Nomor_Telpon"
        type="number"
        autoComplete="off"
        required
        error={
          formState.message === "Invalid phone number"
            ? "Nomor telepon tidak valid"
            : ""
        }
      />

      <TextArea
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        label="Komentar"
        id="komentar"
        name="Komentar"
        required
        autoComplete="off"
        placeholder="Pesan saya"
      />

      <ButtonSubmit className="block w-full rounded-md font-montserrat text-white bg-primary hover:bg-secondary transition-[background] duration-300">
        Kirim
      </ButtonSubmit>
    </form>
  );
}
