import Navbars from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
// import CanonicalURL from "./canonicalUrl";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Stuff CSS - {pageTitle}</title>
        <meta name="description" content="Stuff is a simple framework CSS for native website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbars />
      <main className="container-fluid docs-main" id="docs" >
        <Sidebar />
        <section>
          {children}
          <Footer />
        </section>
      </main>
    </>
  )
}
