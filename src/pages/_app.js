import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const font2 = Nunito_Sans({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <div
      className={font2.className}
      style={{
        backgroundImage:
          "linear-gradient(155deg, rgba(9, 183, 255, 0.06) 18.25%, rgba(255, 91, 132, 0.09) 30.44%, rgba(9, 183, 255, 0.06) 38.43%, rgba(185, 88, 178, 0.06) 53.35%, rgba(16, 170, 255, 0.13) 74.42%)",
      }}
    >
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
