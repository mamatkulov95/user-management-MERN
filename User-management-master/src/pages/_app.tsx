import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ContextProvider from "@/components/context/context";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
