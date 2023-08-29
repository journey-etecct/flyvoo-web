import { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <Component {...pageProps} key={router.asPath} />
      )}
    </div>
  );
}
