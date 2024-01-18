import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { cn } from "../libs/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import store from "../base/store/store";
import { Provider } from "react-redux";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className={cn(montserrat.className, "bg-secondary")}>
          <Component {...pageProps} />;
        </div>
        <Toaster />
      </Provider>
    </QueryClientProvider>
  );
}
