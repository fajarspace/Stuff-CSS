export default function Dropdown() {
  return (
    <>
      <main className="container">

        <details role="list">
          <summary aria-haspopup="listbox">Dropdown</summary>
          <ul role="listbox">
            <li><a>Action</a></li>
            <li><a>Another action</a></li>
            <li><a>Something else here</a></li>
          </ul>
        </details>

        <select>
          <option value="" disabled selected>Select</option>
          <option>…</option>
        </select>

      </main>
    </>
  )
}


