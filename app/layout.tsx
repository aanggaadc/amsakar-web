import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amasakar Achmad",
  description: "Calon Walikota Batam 2024",
  keywords:
    "Amasakar Achmad, Calon Walikota Batam, Pilkada 2024, Batam, Kepri, Indonesia, Walikota Batam, Pilkada Batam, Pilkada Kepri, Pilkada Indonesia, Pemilihan Kepala Daerah, Pemilihan Kepala Daerah 2024, Pemilihan Kepala Daerah Batam, Pemilihan Kepala Daerah Kepri, Pemilihan Kepala Daerah Indonesia, Pemilihan Walikota Batam, Pemilihan Walikota Batam 2024, Pemilihan Walikota Batam Kepri, Pemilihan Walikota Batam Indonesia, Pemilihan Walikota Batam 2024 Kepri, Pemilihan Walikota Batam 2024 Indonesia, Pemilihan Walikota Batam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
