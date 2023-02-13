import Layout from "../../components/layout";

export default function Introduction() {
  return (
    <>
      <Layout pageTitle="getting started">
        <hgroup>
          <h1>Get started with Stuff</h1>
          <h2>Stuff is a simple framework for native website</h2>
        </hgroup>
        <hgroup>
          <h1>Quick start</h1>
          <h2>Install Manually, CDN, or NPM.</h2>
        </hgroup>
        <pre><code><em>&lt;!doctype html&gt;</em>{"\n"}&lt;<b>html</b> <i>lang</i>=<u>"en"</u>&gt;{"\n"}{"  "}&lt;<b>head</b>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>charset</i>=<u>"utf-8"</u>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>name</i>=<u>"viewport"</u> <i>content</i>=<u>"width=device-width, initial-scale=1"</u>&gt;{"\n"}{"    "}&lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=<u>"https://unpkg.com/stuffcss@latest/dist/css/stuff.min.css"</u>&gt;{"\n"}{"    "}&lt;<b>title</b>&gt;Hello, world!&lt;/<b>title</b>&gt;{"\n"}{"  "}&lt;/<b>head</b>&gt;{"\n"}{"  "}&lt;<b>body</b>&gt;{"\n"}{"    "}&lt;<b>h1</b>&gt;Hello, world!&lt;/<b>h1</b>&gt;{"\n"}{"    "}&lt;<b>script</b> <i>src</i>=<u>"https://unpkg.com/stuffcss@latest/dist/js/stuff.min.js"</u>&gt;&lt;/<b>script</b>&gt;{"\n"}{"  "}&lt;/<b>body</b>&gt;{"\n"}&lt;/<b>html</b>&gt;</code></pre>
        <h3>Install with NPM</h3>
        <pre><code>$<u> npm install stuffcss</u></code></pre>

      </Layout>
    </>
  )
}
