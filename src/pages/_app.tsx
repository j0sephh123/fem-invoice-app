import Header from "@/components/sections/Header/Header";
import Sidebar from "@/components/sections/Sidebar/Sidebar";
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
