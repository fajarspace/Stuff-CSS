import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import Head from "next/head";
import Link from "next/link";

export default function Download() {
  return (
    <Layout pageTitle="Download">
      <hgroup>
        <h1>Download</h1>
        <h2>Download Stuff to get the compiled CSS and JavaScript.</h2>
      </hgroup>
      <Link style={{ textDecoration: 'underline' }} href="https://github.com/fajarspace/Stuff-CSS/releases">Download latest
        stuff</Link> and linked to
      <code><u>dist/</u></code>
      <p />
      <pre><code>&lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=<u>"dist/css/stuff.min.css"</u>&gt;</code></pre>
      <pre><code>&lt;<b>script</b> <i>src</i>=<u>"dist/js/stuff.min.js"</u>&gt;&lt;/<b>script</b>&gt;</code></pre>
    </Layout>

  )
}
