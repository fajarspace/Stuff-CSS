// import Script from 'next/script'
// import Image from 'next/image'
import Head from "next/head";
// import Link from "next/link";
// import { Inter } from '@next/font/google'
import HomePage from "./HomePage";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stuff CSS</title>
        <meta name="description" content="Stuff is a simple framework CSS for native website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />

    </>
  )
}
