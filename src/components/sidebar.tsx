import React from 'react'
import Script from "next/script";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <aside>
        <nav className="closed-on-mobile">
          <a href={"./"} className="secondary" id="toggle-docs-navigation">
            <div>👇 Table of content</div>
          </a>
          <details open>
            <summary>Getting started</summary>
            <div>
              <ul>
                <li><a href="/docs" id="start-link" className="secondary">Introduction</a></li>
                <li><a href="/docs/download" id="download-link" className="secondary">Download</a></li>
              </ul>
            </div>
          </details>
          <details open>
            <summary>Customize</summary>
            <div>
              <ul>
                {/* <li><a href="./color" id="color-link" class="secondary">Color</a></li> */}
                <li><a href="/docs/customize/themes" id="themes-link" className="secondary">Themes</a></li>
                <li><a href="/docs/customize/css-variables" id="cssvar-link" className="secondary">CSS variables</a></li>
              </ul>
            </div>
          </details>
          <details open>
            <summary>Layout</summary>
            <ul>
              <li><a href="/docs/layout/containers" id="containers-link" className="secondary">Containers</a></li>
              <li><a href="/docs/layout/flex" id="flex-link" className="secondary">Flex</a></li>
              <li><a href="/docs/layout/grid" id="grid-link" className="secondary">Grid</a></li>
              {/* <li><a href="./scroller" id="scroller-link" class="secondary">Horizontal scroller</a></li> */}
            </ul>
          </details>
          <details open>
            <summary>Contents</summary>
            <ul>
              <li><a href="/docs/contents/typography" id="typography-link" className="secondary">Typography</a></li>
              <li><a href="/docs/contents/images" id="images-link" className="secondary">Images</a></li>
              {/* <li><a href="./buttons" id="buttons-link" class="secondary">Buttons</a></li>
        <li><a href="./forms" id="forms-link" class="secondary">Forms</a></li>
        <li><a href="./tables" id="tables-link" class="secondary">Tables</a></li> */}
            </ul>
          </details>
          <details open>
            <summary>Forms</summary>
            <ul>
              {/* <li><a href="./typography" id="typography-link" class="secondary">Typography</a></li> */}
            </ul>
          </details>
          <details open>
            <summary>Components</summary>
            <ul>
              <li><a href="/docs/components/accordion" id="accordion-link" className="secondary">Accordion</a></li>
              <li><a href="/docs/components/breadcrumb" id="breadcrumb-link" className="secondary">Breadcrumb</a></li>
              <li><a href="/docs/components/buttons" id="buttons-link" className="secondary">Buttons</a></li>
              <li><a href="/docs/components/cards" id="cards-link" className="secondary">Cards</a></li>
              {/* <li><a href="./dropdowns" id="dropdowns-link" class="secondary">Dropdowns</a></li> */}
              {/* <li><a href="./modal" id="modal-link" class="secondary">Modal</a></li> */}
              <li><a href="/docs/components/navbar" id="navbar-link" className="secondary">Navbar</a></li>
              {/* <li><a href="./progress" id="progress-link" class="secondary">Progress</a></li> */}
            </ul>
          </details>
          <details open>
            <summary>Utilities</summary>
            <ul>
            </ul>
          </details>
        </nav>

      </aside >
    </>
  )
}