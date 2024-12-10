import { AppProvider } from "@/contexts/AppContext";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
