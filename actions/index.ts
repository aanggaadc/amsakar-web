"use server";

import { getErrorMessage } from "@/lib/error";
import { validatePhoneNumber } from "@/lib/utils";

export async function sendForm(
  _prevState: ApiResponse,
  formData: FormData
): Promise<ApiResponse> {
  const url = process.env.SHEET_URL as string;
  const phone = formData.get("Nomor_Telpon");

  if (!validatePhoneNumber(phone as string)) {
    return {
      code: 400,
      message: "Invalid phone number",
      status: "error",
    };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "Terjadi kesalahan, silahkan coba lagi",
        code: 400,
      };
    }

    return {
      status: "success",
      message: "Berhasil mengirimkan data!",
      code: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: getErrorMessage(error),
      code: 500,
    };
  }
}
