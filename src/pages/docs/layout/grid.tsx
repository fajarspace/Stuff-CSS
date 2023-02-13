import Layout from "../../../components/layout";

export default function Grid() {
  return (
    <Layout pageTitle="Grid" >

      <hgroup>
        <h1>Grid</h1>
        <h2><code>.grid</code> minimal grid layout.</h2>
      </hgroup>
      <h1>Example</h1>
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <footer className="code">
        <pre><code>&lt;<b>div</b> <i>class</i>=<u>"grid"</u>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;1&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;2&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;3&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;4&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;5&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;6&lt;/<b>div</b>&gt;{"\n"}&lt;/<b>div</b>&gt;</code></pre>
      </footer>
      <p>Columns intentionally collapses below large devices <code>(<u>768px</u>)</code></p>
      <hgroup>
        <h1>Grid auto column</h1>
        <h2><code>.grid-auto</code> enable a minimal grid system with auto-layout columns.</h2>
      </hgroup>
      <div className="grid-auto">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <footer className="code">
        <pre><code>&lt;<b>div</b> <i>class</i>=<u>"grid-auto"</u>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;1&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;2&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;3&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;4&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;5&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>div</b>&gt;6&lt;/<b>div</b>&gt;{"\n"}&lt;/<b>div</b>&gt;</code></pre>
      </footer>
      <p>
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={12} cy={12} r={10} />
          <line x1={12} y1={16} x2={12} y2={12} />
          <line x1={12} y1={8} x2="12.01" y2={8} />
        </svg>
        &nbsp;Stuff focuses on native HTML elements, we kept this grid system very minimalist.
      </p>
    </Layout>
  )
}
