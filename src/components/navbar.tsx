import Link from "next/link";
import Darkmode from "./darkmode";

export default function Navbar() {
  return (
    <>
      <nav style={{ backgroundColor: 'var(--background-color)', zIndex: 99, borderBottom: '1px solid var(--muted-border-color)' }} className="container-fluid fixed">
        <ul>
          <li><a href="/">Stuff CSS</a></li>
          {/* <li><a href="/docs/">Docs</a></li>/ */}
          {/* <li><a href="/themes/">Themes</a></li> */}
          <li><a href="/examples/">Examples</a></li>

        </ul>
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" >v1.1</summary>
              <ul role="listbox">
                <li><a href="/" >v1.1</a></li>
              </ul>
            </details>
          </li>
          <Darkmode />
        </ul>
      </nav>
      <br />
      <br />
    </>
  )
}
