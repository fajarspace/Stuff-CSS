import Layout from "../../../components/layout";

export default function Navbar() {
  return (
    <Layout pageTitle="Navbar" >
      <hgroup>
        <h1>Navbar</h1>
        <h2>The essential navbar component.</h2>
      </hgroup>
      <h1>Example</h1>
      <nav>
        <ul>
          <li><strong>Brand</strong></li>
        </ul>
        <ul>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#" role="button">Button</a></li>
        </ul>
      </nav>
      <pre><code>&lt;<b>nav</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>strong</b>&gt;Brand&lt;/<b>strong</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Link&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Link&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>role</i>=<u>"button"</u>&gt;Button&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}&lt;/<b>nav</b>&gt;</code></pre>
      <hgroup>
        <h1>Navbar without list</h1>
        <h2>The essential navbar component.</h2>
      </hgroup>
      <nav>
        <ul>
          <li>
            <a href="#" className="secondary" aria-label="Menu">
              <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={3} y1={12} x2={21} y2={12}>
                </line>
                <line x1={3} y1={6} x2={21} y2={6}>
                </line>
                <line x1={3} y1={18} x2={21} y2={18}>
                </line>
              </svg>
            </a>
          </li>
        </ul>
        <ul>
          <li><strong>Brand</strong></li>
        </ul>
        <ul>
          <li>
            <a href="#" className="secondary" aria-label="Twitter">
              <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="currentColor" stroke="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                </path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <pre><code>&lt;<b>nav</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>class</i>=<u>"secondary"</u>&gt;…&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>strong</b>&gt;Brand&lt;/<b>strong</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}{"  "}&lt;<b>ul</b>&gt;{"\n"}{"    "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>class</i>=<u>"secondary"</u>&gt;…&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"  "}&lt;/<b>ul</b>&gt;{"\n"}&lt;/<b>nav</b>&gt;</code></pre>
      <hgroup>
        <h1>Navbar vertically</h1>
        <p>Inside <code>&lt;<b>aside</b>&gt;</code>, navs are stacked vertically.</p>
      </hgroup>
      <aside>
        <nav>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </nav>
      </aside>
      <pre><code>&lt;<b>aside</b>&gt;{"\n"}{"  "}&lt;<b>nav</b>&gt;{"\n"}{"    "}&lt;<b>ul</b>&gt;{"\n"}{"      "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Link&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"      "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Link&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"      "}&lt;<b>li</b>&gt;&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Link&lt;/<b>a</b>&gt;&lt;/<b>li</b>&gt;{"\n"}{"    "}&lt;/<b>ul</b>&gt;{"\n"}{"  "}&lt;/<b>nav</b>&gt;{"\n"}&lt;/<b>aside</b>&gt;</code></pre>
    </Layout>
  )
}
