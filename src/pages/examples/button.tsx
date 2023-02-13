export default function Button() {
  return (
    <>
      <main className="container">
        <button>Button</button>
        <input type="submit" />

        <a href="#" role="button">Primary</a>
        <a href="#" role="button" className="secondary">Secondary</a>
        <a href="#" role="button" className="contrast">Contrast</a>

        <a href="#" role="button" className="outline">Primary</a>
        <a href="#" role="button" className="secondary outline">Secondary</a>
        <a href="#" role="button" className="contrast outline">Contrast</a>
      </main>
    </>
  )
}
