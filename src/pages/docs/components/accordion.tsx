import Layout from "../../../components/layout";

export default function Accordion() {
  return (
    <Layout pageTitle="Accordion" >
      <hgroup>
        <h1>Accordions</h1>
        <h2>Toggle sections of content in pure HTML</h2>
      </hgroup>
      <h1>Example</h1>
      <div className="card" aria-label="Accordions examples">
        <details>
          <summary>Accordion 1</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed,
            auctor id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris
            ipsum. Aliquam eu posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit
            sollicitudin. Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices,
            porta turpis sit amet, congue turpis.</p>
        </details>
        <details open>
          <summary>Accordion 2</summary>
          <ul>
            <li>Vestibulum id elit quis massa interdum sodales.</li>
            <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
            <li>Quisque sed eros non eros ornare elementum.</li>
            <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
          </ul>
        </details>
        <footer className="code">
          <pre><code>&lt;<b>details</b>&gt;{"\n"}{"  "}&lt;<b>summary</b>&gt;Accordion 1&lt;/<b>summary</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;…&lt;/<b>p</b>&gt;{"\n"}&lt;/<b>details</b>&gt;{"\n"}{"\n"}&lt;<b>details</b> <i>open</i>&gt;{"\n"}{"  "}&lt;<b>summary</b>&gt;Accordion 2&lt;/<b>summary</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;…&lt;/<b>li</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;…&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}&lt;/<b>details</b>&gt;</code></pre>
        </footer>
      </div>
      <p><code><i>role</i>=<u>"button"</u></code> can be used to turn <code>&lt;<b>summary</b>&gt;</code> into a
        button.</p>
      <div className="card" aria-label="Accordions buttons examples">
        <details>
          <summary role="button">Accordion 1</summary>
          <p>Aenean vestibulum nunc at libero congue, eu pretium nulla viverra. Fusce sed ex at est egestas vehicula.
            Integer sit amet lectus mi. Duis ut viverra mauris, at laoreet enim.</p>
        </details>
        <details>
          <summary role="button" className="secondary">Accordion 2</summary>
          <p>Quisque porta dictum ipsum nec vestibulum. Suspendisse non mi ac tellus scelerisque egestas. Sed vel nisi
            laoreet, rhoncus urna quis, luctus risus. Donec vitae molestie felis.</p>
        </details>
        <details>
          <summary role="button" className="contrast">Accordion 3</summary>
          <p>Praesent quam ipsum, condimentum non augue at, porttitor interdum tellus. Curabitur ultrices consectetur
            leo, a placerat mauris malesuada et. In quis varius risus.</p>
        </details>
        <footer className="code">
          <pre><code><em>&lt;!-- Primary --&gt;</em>{"\n"}&lt;<b>details</b>&gt;{"\n"}{"  "}&lt;<b>summary</b> <i>role</i>=<u>"button"</u>&gt;Accordion 1&lt;/<b>summary</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;…&lt;/<b>p</b>&gt;{"\n"}&lt;/<b>details</b>&gt;{"\n"}{"\n"}<em>&lt;!-- Secondary --&gt;</em>{"\n"}&lt;<b>details</b>&gt;{"\n"}{"  "}&lt;<b>summary</b> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"secondary"</u>&gt;Accordion 2&lt;/<b>summary</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;…&lt;/<b>p</b>&gt;{"\n"}&lt;/<b>details</b>&gt;{"\n"}{"\n"}<em>&lt;!-- Contrast --&gt;</em>{"\n"}&lt;<b>details</b>&gt;{"\n"}{"  "}&lt;<b>summary</b> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"contrast"</u>&gt;Accordion 3&lt;/<b>summary</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;…&lt;/<b>p</b>&gt;{"\n"}&lt;/<b>details</b>&gt;{"\n"}</code></pre>
        </footer>
      </div>
    </Layout>
  )
}
