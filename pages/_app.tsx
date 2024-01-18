import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { cn } from "../libs/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(montserrat.className, "bg-gray-100")}>
      <Component {...pageProps} />;
    </div>
  );
}
