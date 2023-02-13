import Layout from "../../../components/layout";

export default function Containers() {
  return (
    <Layout pageTitle="Containers" >
      <hgroup>
        <h1>Containers</h1>
        <h2>Stuff breakpoints and viewports sizes</h2>
      </hgroup>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th>Device</th>
              <th>Extra&nbsp;small</th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
              <th>Extra&nbsp;large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Breakpoint</th>
              <td>&lt;576<small>px</small></td>
              <td>≥576<small>px</small></td>
              <td>≥768<small>px</small></td>
              <td>≥992<small>px</small></td>
              <td>≥1200<small>px</small></td>
            </tr>
            <tr>
              <th>Viewport</th>
              <td>100<small>%</small></td>
              <td>540<small>px</small></td>
              <td>720<small>px</small></td>
              <td>960<small>px</small></td>
              <td>1140<small>px</small></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h1>Example</h1>
      <section id="containers">
        <hgroup>
          <h1>Container</h1>
          <h2>
            <code>.container</code> enable a centered viewport.<br />
            {/* <code>.container-fluid</code> enable a <code><u>100%</u></code> layout. */}
          </h2>
        </hgroup>
        <pre><code>&lt;<b>main</b> <i>class</i>=<u>"container"</u>&gt;{"\n"}{"  "}&lt;<b>h1</b>&gt;Hello, world!&lt;<b>/h1</b>&gt;{"  "}{"\n"}&lt;<b>main</b>&gt;{"\n"}</code></pre>
        <section id="containers">
          <hgroup>
            <h1>Container Fluid</h1>
            <h2>
              <code>.container-fluid</code> enable a <code><u>100%</u></code> layout.
            </h2>
          </hgroup>
          <pre><code>&lt;<b>main</b> <i>class</i>=<u>"container-fluid"</u>&gt;{"\n"}{"  "}&lt;<b>h1</b>&gt;Hello, world!&lt;<b>/h1</b>&gt;{"  "}{"\n"}&lt;<b>main</b>&gt;{"\n"}</code></pre>
          <p><code>&lt;<b>header</b>&gt;</code>, <code>&lt;<b>main</b>&gt;</code> and <code>&lt;<b>footer</b>&gt;</code>
            as direct children of <code>&lt;<b>body</b>&gt;</code> provide a responsive vertical
            <code><i>padding</i></code>
          </p>
          <p><code>&lt;<b>section</b>&gt;</code> provides a responsive <code><i>margin-bottom</i></code> to separate
            your
            sections.</p>
        </section></section>

    </Layout>
  )
}
