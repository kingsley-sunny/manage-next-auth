import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../base/store/store";
import { AuthenticatedLayout } from "../components/Layouts/AuthenticatedLayout";
import { cn } from "../libs/utils";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  if (route.includes("/dashboard")) {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className={cn(montserrat.className, "bg-secondary")}>
            <AuthenticatedLayout>
              <Component {...pageProps} />;
            </AuthenticatedLayout>
            <Toaster />
          </div>
        </Provider>
      </QueryClientProvider>
    );
  }

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
