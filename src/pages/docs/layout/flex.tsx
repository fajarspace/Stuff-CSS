import Layout from "../../../components/layout";

export default function Flex() {
  return (
    <Layout pageTitle="Flex" >

      <hgroup>
        <h1>Flex</h1>
        <h2>Flex minimalist.</h2>
      </hgroup>
      <h1>Example</h1>
      <div className="flex">
        <div className="items">1</div>
        <div className="items">2</div>
        <div className="items">3</div>
        <div className="items">4</div>
        <div className="items">5</div>
        <div className="items">6</div>
      </div>
      <footer className="code">
        <pre><code>&lt;<b>div</b> <i>class</i>=<u>"flex"</u>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;1&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;2&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;3&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;4&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;5&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"items"</u>&gt;6&lt;/<b>div</b>&gt;{"\n"}&lt;/<b>div</b>&gt;</code></pre>
      </footer>
      <p>Columns intentionally collapses below large devices <code>(<u>768px</u>)</code></p>
    </Layout>
  )
}
