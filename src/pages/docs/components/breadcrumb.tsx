import Layout from "../../../components/layout";

export default function Breadcrumb() {
  return (
    <Layout pageTitle="Breadcrumb" >
      <hgroup>
        <h1>Breadcrumb</h1>
        <p>With <code><i>aria-label</i>=<u>"breadcrumb"</u></code>, you can turn a nav into a breadcrumb.</p>
      </hgroup>
      <h1>Example</h1>
      <div className="card">
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href={"#"}>Home</a>
            </li>
            <li>
              <a href={"#"}>Category</a>
            </li>
            <li>Page</li>
          </ul>
        </nav>
        <footer className="code">
          <pre><code>&lt;<b>nav</b> <i>aria-label</i>=<u>"breadcrumb"</u>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Home&lt;<b>/a</b>&gt;&lt;<b>/li</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Category&lt;<b>/a</b>&gt;&lt;<b>/li</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;Page&lt;<b>/li</b>&gt;{"\n"}{"  "}&lt;<b>/ul</b>&gt;{"\n"}&lt;/<b>nav</b>&gt;</code></pre>
        </footer>
      </div>
    </Layout>
  )
}
