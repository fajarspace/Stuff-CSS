export default function Accordion() {
  return (
    <>
      <main className="container">
        <details>
          <summary>Accordion 1</summary>
          <p>haloo</p>
        </details>

        <details open>
          <summary>Accordion 2</summary>
          <ul>
            <li>haloo</li>
            <li>haloo</li>
          </ul>
        </details>


        <details>
          <summary role="button">Accordion 1</summary>
          <p>…</p>
        </details>


        <details>
          <summary role="button" className="secondary">Accordion 2</summary>
          <p>…</p>
        </details>


        <details>
          <summary role="button" className="contrast">Accordion 3</summary>
          <p>…</p>
        </details>

      </main>
    </>
  )
}



