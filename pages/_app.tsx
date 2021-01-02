import { AppProps } from "next/app";
import "fontsource-roboto";
import "reflect-metadata";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
