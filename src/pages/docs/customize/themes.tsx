import Layout from "../../../components/layout";

export default function Themes() {
  return (
    <Layout pageTitle="Themes" >
      <hgroup>
        <h1>Themes</h1>
        <h2></h2>
      </hgroup>
      <h1>Example</h1>
      <hgroup>
        <h1>Dark mode</h1>
        <h2>stuff theme Dark mode (Auto) </h2>
      </hgroup>
      <p>
        We recommend the <code><b>li</b></code> and <code><b>a</b></code> tags for dark mode
      </p>
      <a href="#" role='button' className="darkmode"></a>

      <pre><code>
        <em>&lt;!--choose one--&gt;</em> <br />
        &lt;<b>li</b> <i>class</i>=<u>"darkmode"</u>&gt;&lt;/<b>li</b>&gt;
        <br />
        &lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u> <i>class</i>=<u>"darkmode"</u>&gt;&lt;/<b>a</b>&gt;
      </code></pre>
      <hgroup>
        <h1>Default theme</h1>
        <h2>You can choose one of the default themes</h2>
      </hgroup>

      <p>Forced the themes on document <code>&lt;<b>html</b> <i>data-theme</i>=<u>"light"</u>&gt;</code> or
        on any HTML element <code>&lt;<b>main</b> <i>data-theme</i>=<u>"dark"</u>&gt;</code></p>

    </Layout>
  )
}
