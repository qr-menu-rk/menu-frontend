import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {/*conditionaly render showcase component*/}
      {router.pathname === "/" && <Showcase />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "RK DIGITAL MENU",
  keywords: "Tirana, RK, RUBIN ELEZI, KRETANA REVELI, DIGITAL MENU, DIGITAL, QR CODE",
  description: "RK DIGITAL MENU",
};
