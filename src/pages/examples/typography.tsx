export default function Typo() {
  return (
    <main className="container">
      <h1>Hello, world!</h1>
      <h2>Hello, world!</h2>
      <h3>Hello, world!</h3>
      <h4>Hello, world!</h4>
      <h5>Hello, world!</h5>
      <h6>Hello, world!</h6>
      <small>Hello, world!</small>
      <div className="heading">
        <h2>Heading 2</h2>
        <h3>Subtitle for heading 2</h3>
      </div>
      <div className="grid">
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



      </div>
    </main>

  )
}


