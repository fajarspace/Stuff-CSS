import Link from "next/link";
import Darkmode from "./darkmode";

export default function Navbar() {
  return (
    <>
      <nav style={{ zIndex: 99, borderBottom: '1px solid var(--muted-border-color)' }} className="container-fluid fixed bg-primary">
        <ul>
          <li><strong><a className="text-white" href="/">Stuff CSS</a></strong></li>
        </ul>
        <ul>
          {/* <li>
            <details role="list">
              <summary aria-haspopup="listbox" >v1.1</summary>
              <ul role="listbox">
                <li><a href="/" >v1.1</a></li>
              </ul>
            </details>
          </li> */}
          <li><a className="text-white" href="/docs/">Docs</a></li>
          {/* <li><a href="/themes/">Themes</a></li> */}
          <li><a className="text-white" href="/examples/">Examples</a></li>
          <Darkmode />

        </ul>
      </nav>
      <br />
      <br />
    </>
  )
}
