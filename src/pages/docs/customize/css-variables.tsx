import Layout from "@/components/layout";

export default function CssVariables() {
  return (
    <Layout pageTitle="css variables">
      <hgroup>
        <h1>CSS variables</h1>
        <h2>Use Stuff CSS custom properties for fast and forward-looking design</h2>
      </hgroup>
      <p>Bootstrap includes many CSS custom properties (variables) in its compiled CSS for real-time customization
        without the need to recompile Sass</p>

      <hgroup>
        <h1>Root variables</h1>
        <h2>in our <code>_root.scss</code> file and included in our compiled dist files.</h2>
      </hgroup>
      <hgroup>
        <h1>Default</h1>
      </hgroup>
      <pre><code>{"\n"}{""}<b>:root</b> {"{"}{"\n"}{"   "}scroll - behavior: <u>var</u>(<i>smooth</i>);{"\n"}{"}"}</code></pre>

      <hgroup>
        <h1>Examples</h1>
        <h2>CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before
          being served to the browser.</h2>
      </hgroup>
      <pre><code>{"\n"}{""}<b>body</b> {"{"}{"\n"}{"  "}font: 1rem/1.5 <u>var</u>(<i>--sf-font-sans-serif</i>);{"\n"}{"}"}{"\n"}{""}<b>a</b> {"{"}{"\n"}{"  "}color: <u>var</u>(<i>--sf-blue</i>);{"\n"}{"}"}</code></pre>
    </Layout>
  )
}
