import Layout from "../../../components/layout";

export default function Buttons() {
  return (
    <Layout pageTitle="Buttons" >
      <section id="buttons">
        <hgroup>
          <h1>Buttons</h1>
          <h2>Buttons are <code><i>width</i>: <u>100%</u>;</code> by default.</h2>
        </hgroup>
        <h1>Example</h1>
        <div className="card" aria-label="Button example">
          <button aria-label="Button">Button</button>
          <input type="submit" />
          <footer className="code">
            <pre><code>&lt;<b>button</b>&gt;Button&lt;/<b>button</b>&gt;{"\n"}&lt;<b>input</b> <i>type</i>=<u>"submit"</u>&gt;</code></pre>
          </footer>
        </div>
        <hgroup>
          <h1>Button inline</h1>
          <h2>Use <code><i>role</i>=<u>"button"</u></code> on
            an inline element if you need an inline button.</h2>
        </hgroup>
        <div className="card" aria-label="Inline buttons examples">
          <a href="#" role="button">Primary</a>
          <a href="#" className="secondary" role="button">Secondary</a>
          <a href="#" className="contrast" role="button">Contrast</a>
          <footer className="code">
            <pre><code>&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u>&gt;Primary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"secondary"</u>&gt;Secondary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"contrast"</u>&gt;Contrast&lt;/<b>a</b>&gt;{"\n"}</code></pre>
          </footer>
        </div>
        <hgroup>
          <h1>Button outline</h1>
          <h2>Buttons come with <code>.outline</code> styles.</h2>
        </hgroup>
        <div className="card" aria-label="Outline style examples">
          <a href="#" role="button" className="outline">Primary</a>
          <a href="#" role="button" className="secondary outline">Secondary</a>
          <a href="#" role="button" className="contrast outline">Contrast</a>
          <footer className="code">
            <pre><code>&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"outline"</u>&gt;Primary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"secondary outline"</u>&gt;Secondary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"contrast outline"</u>&gt;Contrast&lt;/<b>a</b>&gt;</code></pre>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
