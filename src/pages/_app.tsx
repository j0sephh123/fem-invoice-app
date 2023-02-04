import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="page">
        <Sidebar />
        <main className="main">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
