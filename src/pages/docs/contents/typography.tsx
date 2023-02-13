import Layout from "../../../components/layout";

export default function Typography() {
  return (
    <Layout pageTitle="Typography" >

      <hgroup>
        <h1>Typography</h1>
        <h2>
          All typographic elements are responsive.
        </h2>
      </hgroup>
      <h1>Example</h1>
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
              <th>Base&nbsp;font</th>
              <td>16<small>px</small></td>
              <td>17<small>px</small></td>
              <td>18<small>px</small></td>
              <td>19<small>px</small></td>
              <td>20<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h1</b>&gt;</code></th>
              <td>32<small>px</small></td>
              <td>34<small>px</small></td>
              <td>36<small>px</small></td>
              <td>38<small>px</small></td>
              <td>40<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h2</b>&gt;</code></th>
              <td>28<small>px</small></td>
              <td>29<small>px</small></td>
              <td>31<small>.5px</small></td>
              <td>33<small>.25px</small></td>
              <td>35<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h3</b>&gt;</code></th>
              <td>24<small>px</small></td>
              <td>25<small>.5px</small></td>
              <td>27<small>px</small></td>
              <td>28<small>.5px</small></td>
              <td>30<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h4</b>&gt;</code></th>
              <td>20<small>px</small></td>
              <td>21<small>.25px</small></td>
              <td>22<small>.5px</small></td>
              <td>23<small>.75px</small></td>
              <td>25<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h5</b>&gt;</code></th>
              <td>18<small>px</small></td>
              <td>19<small>.125px</small></td>
              <td>20<small>.25px</small></td>
              <td>21<small>.375px</small></td>
              <td>22<small>.5px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>h6</b>&gt;</code></th>
              <td>16<small>px</small></td>
              <td>17<small>px</small></td>
              <td>18<small>px</small></td>
              <td>19<small>px</small></td>
              <td>20<small>px</small></td>
            </tr>
            <tr>
              <th><code>&lt;<b>small</b>&gt;</code></th>
              <td>14<small>px</small></td>
              <td>14<small>.875px</small></td>
              <td>15<small>.75px</small></td>
              <td>16<small>.625px</small></td>
              <td>27<small>.5px</small></td>
            </tr>
          </tbody>
        </table>
      </figure>
      <hgroup>
        <h1>Heading</h1>
        <h2>
          Heading.
        </h2>
      </hgroup>
      <div className="card">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <div className="heading">
          <h2>I'm Heading 2</h2>
          <h3>Subtitle for heading 2</h3>
        </div>
        <footer className="code">
          <pre><code>&lt;<b>h1</b>&gt;Heading 1&lt;/<b>h1</b>&gt;{"\n"}&lt;<b>h2</b>&gt;Heading 2&lt;/<b>h2</b>&gt;{"\n"}&lt;<b>h3</b>&gt;Heading 3&lt;/<b>h3</b>&gt;{"\n"}&lt;<b>h4</b>&gt;Heading 4&lt;/<b>h4</b>&gt;{"\n"}&lt;<b>h5</b>&gt;Heading 5&lt;/<b>h5</b>&gt;{"\n"}&lt;<b>h6</b>&gt;Heading 6&lt;/<b>h6</b>&gt;{"\n"}{"\n"}&lt;<b>div</b> <i>class</i>=<u>"heading</u>"&gt;{"\n"}{"  "}&lt;<b>h2</b>&gt;Heading 2&lt;/<b>h2</b>&gt;{"\n"}{"  "}&lt;<b>h3</b>&gt;Subtitle for heading 2&lt;/<b>h3</b>&gt;{"\n"}&lt;/<b>div</b>&gt;{"\n"}</code></pre>
        </footer>
      </div>
      <p>
        Inside a <code>&lt;<b>hgroup</b>&gt;</code> or a
        <code>&lt;<b>div</b> <i>class</i>=<u>"heading"</u>&gt;</code> all
        <code><i>margin-bottom</i></code> are collapsed and the
        <code>:last-child</code> is muted.
      </p>
      <hgroup>
        <h1>Inline text</h1>
        <h2>
          Inline text.
        </h2>
      </hgroup>
      <div className="card">
        <div className="grid">
          <div>
            <p><abbr title="Abbreviation">Abbr.</abbr> <code>abbr</code></p>
            <p><strong>Bold</strong> <code>strong</code> <code>b</code></p>
            <p>
              <em>Italic</em> <code>i</code> <code>em</code>
              <code>cite</code>
            </p>
            <p><del>Deleted</del> <code>del</code></p>
            <p><ins>Inserted</ins> <code>ins</code></p>
            <p><kbd>Ctrl + S</kbd> <code>kbd</code></p>
          </div>
          <div>
            <p><mark>Highlighted</mark> <code>mark</code></p>
            <p><s>Strikethrough</s> <code>s</code></p>
            <p><small>Small </small> <code>small</code></p>
            <p>Text <sub>Sub</sub> <code>sub</code></p>
            <p>Text <sup>Sup</sup> <code>sup</code></p>
            <p><u>Underline</u> <code>u</code></p>
          </div>
        </div>
        <footer className="code">
          <pre><code>{"\n"}&lt;<b>abbr</b> <i>title</i>=<u>"Abbreviation"</u>&gt;Abbr.&lt;/<b>abbr</b>&gt;{"\n"}&lt;<b>strong</b>&gt;Bold&lt;/<b>strong</b>&gt;{"\n"}&lt;<b>em</b>&gt;Italic&lt;/<b>em</b>&gt;{"\n"}&lt;<b>del</b>&gt;Deleted&lt;/<b>del</b>&gt;{"\n"}&lt;<b>ins</b>&gt;Inserted&lt;/<b>ins</b>&gt;{"\n"}&lt;<b>kbd</b>&gt;Ctrl + S&lt;/<b>kbd</b>&gt;{"\n"}&lt;<b>mark</b>&gt;Highlighted&lt;/<b>mark</b>&gt;{"\n"}&lt;<b>s</b>&gt;Strikethrough&lt;/<b>s</b>&gt;{"\n"}&lt;<b>small</b>&gt;Small&lt;/<b>small</b>&gt;{"\n"}&lt;<b>sub</b>&gt;Sub&lt;/<b>sub</b>&gt;{"\n"}&lt;<b>sup</b>&gt;Sup&lt;/<b>sup</b>&gt;{"\n"}&lt;<b>u</b>&gt;Underline&lt;/<b>u</b>&gt;{"\n"}{"\n"}{"        "}</code></pre>
        </footer>
      </div>
      <hgroup>
        <h1>Links</h1>
        <h2>
          With <code>.secondary</code> and <code>.contrast</code> styles.
        </h2>
      </hgroup>
      <div className="card">
        <a href="#">Primary</a><br />
        <a href="#" className="secondary">Secondary</a><br />
        <a href="#" className="contrast">Contrast</a><br />
        <footer className="code">
          <pre><code>&lt;<b>a</b> <i>href</i>=<u>"#"</u>&gt;Primary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>class</i>=<u>"secondary"</u>&gt;Secondary&lt;/<b>a</b>&gt;{"\n"}&lt;<b>a</b> <i>href</i>=<u>"#"</u> <i>class</i>=<u>"contrast"</u>&gt;Contrast&lt;/<b>a</b>&gt;</code></pre>
        </footer>
      </div>
      <hgroup>
        <h1>Blockquote</h1>
        <h2>
        </h2>
      </hgroup>
      <blockquote>
        "Kalo bisa dikerjakan besok kenapa harus sekarang?"
        <footer>
          <cite>- Ilham</cite>
        </footer>
      </blockquote>
      <pre><code>&lt;<b>blockquote</b>&gt;{"\n"}{"  "}"Kalo bisa dikerjakan besok kenapa harus sekarang?"{"\n"}{"  "}&lt;<b>footer</b>&gt;{"\n"}{"    "}&lt;<b>cite</b>&gt;- Ilham&lt;/<b>cite</b>&gt;{"\n"}{"  "}&lt;/<b>footer</b>&gt;{"\n"}&lt;/<b>blockquote</b>&gt;</code></pre>
    </Layout>
  )
}
