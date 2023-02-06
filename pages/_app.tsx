import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <NavBar />
      <Component {...pageProps} />{" "}
    </>
  );
}
