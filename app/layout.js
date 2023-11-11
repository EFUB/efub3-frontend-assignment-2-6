import { Poppins, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--poppins",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "Record",
  description: "일상을 사진과 함께 기록하자",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
