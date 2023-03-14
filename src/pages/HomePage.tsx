import Link from "next/link";
import Hero from "../components/hero"
import Image from 'next/image'

import ImgHeader from '../static/img/2.svg'

export default function HomePage() {
  return (
    <>

      <br /> <br />
      <main className='container-fluid' >
        <section className="" >
          <div className="grid item-center" >
            <div className="">
              <Hero />
              <a role='button' className="" rel={"noreferrer"} href="docs/">Get started </a>

              {/* <Link rel={"noopener"} className="github-button" href="https://github.com/fajarspace/stuff-css" data-icon="octicon-star" data-size="large"
                data-show-count="true" aria-label="Star fajarspace/stuff-css on GitHub">Star</Link> &nbsp;

              <Link rel={"noopener"} className="github-button" href="https://github.com/fajarspace/stuff-css/issues" data-icon="octicon-issue-opened"
                data-size="large" data-show-count="true" aria-label="Issue fajarspace/stuff-css on GitHub">Issue</Link> */}
            </div>
            <div>
              <br />
              <Image
                src={ImgHeader}
                alt='user profile picture'
                width={500}
                height={500}
              />
            </div>
            {/* <div>
              <pre><code><em>&lt;!doctype html&gt;</em>{"\n"}&lt;<b>html</b> <i>lang</i>=<u>"en"</u>&gt;{"\n"}{"  "}&lt;<b>head</b>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>charset</i>=<u>"utf-8"</u>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>name</i>=<u>"viewport"</u> <i>content</i>=<u>"width=device-width, initial-scale=1"</u>&gt;{"\n"}{"    "}&lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=<u>"https://unpkg.com/stuffcss@latest/dist/css/stuff.min.css"</u>&gt;{"\n"}{"    "}&lt;<b>title</b>&gt;Hello, world!&lt;/<b>title</b>&gt;{"\n"}{"  "}&lt;/<b>head</b>&gt;{"\n"}{"  "}&lt;<b>body</b>&gt;{"\n"}{"    "}&lt;<b>h1</b>&gt;Hello, world!&lt;/<b>h1</b>&gt;{"\n"}{"    "}&lt;<b>script</b> <i>src</i>=<u>"https://unpkg.com/stuffcss@latest/dist/js/stuff.min.js"</u>&gt;&lt;/<b>script</b>&gt;{"\n"}{"  "}&lt;/<b>body</b>&gt;{"\n"}&lt;/<b>html</b>&gt;</code></pre>
            </div> */}

          </div>

        </section>

        <section>
          <div className="">
            <div className="grid">
              <div className="card">
                <h2>Install via NPM</h2>
                <p>Install Stuff source Sass and JavaScript files via npm,
                  <br />
                  *note: <i> <u> version for React js is still under development, maybe you will find Link lot of bugs</u></i>
                </p>
                <footer className="code">
                  <pre><code>$<u> npm install stuffcss</u></code></pre>
                </footer>


              </div>
              <div className="card">
                <h2>Include via CDN</h2>
                <p>When you only need to include Stuff compiled CSS or JS, you can use UNPKG.</p>
                <footer className="code">
                  <pre><code>&lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=<u>"https://unpkg.com/stuffcss@latest/dist/css/stuff.min.css"</u>&gt;</code></pre>
                </footer>
                <footer className="code">
                  <pre><code>&lt;<b>script</b> <i>src</i>=<u>"https://unpkg.com/stuffcss@latest/dist/js/stuff.min.js"</u>&gt;&lt;/<b>script</b>&gt;</code></pre>
                </footer>

              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <hgroup>
            <h1>Build and extend in real-time with CSS variables</h1>
            <h2>Stuff is evolving with each release to better utilize CSS variables for global theme styles, individual
              components, and even utilities</h2>
          </hgroup>
          <div className="grid">
            <div>
              <h2>Using CSS variables</h2>
              Use any of our global <Link rel={"noopener"} className="contrast" href="/docs/css-variables/">:root variables</Link> to write new
              styles. CSS
              variables use the var(--bs-variableName)
              syntax and can be inherited by children elements.
              <pre><code>{"\n"}<b>body</b> {"{"}{"\n"}{"\t"}color: <u>var</u>(<i>--primary</i>);{"\n"}{"    "}background-color: <u>var</u>(<i>--background-color</i>);{"\n"}{"  "}{"}"}{"\n"}<i>.heading</i> {"{"}{"\n"}{"   "}{"\t"}font - size: <u>var</u>(<i>--font-size</i>);{"\n"}{"  "}{"}"}</code></pre>
            </div>
            <div>
              <h2>Customizing via CSS variables</h2>
              Override global, component, or utility class variables to customize Bootstrap just how you like. No need to
              redeclare each rule, just Link new variable value
              <pre><code>{"\n"}<b>:root</b> {"{"}{"\n"}{"\t"}--form - element - active - border - color: <u>var</u>(<i>--primary</i>);{"\n"}{"    "}--form-element-focus-color: <u>var</u>(<i>--primary-focus</i>);{"\n"}{"    "}--switch-color: <u>var</u>(<i>--primary-inverse</i>);{"\n"}{"    "}--switch-checked-background-color: <u>var</u>(<i>--primary</i>);{"\n"}{"}"}</code></pre>
            </div>
          </div>
        </section> */}

        {/* <section>
          <div className="center">
            <hgroup>
              <h1 style={{ fontSize: '3em' }}>New themes!</h1>
              <h2>Stuff added dark mode theme</h2>

            </hgroup>

          </div>
          <div className="grid" style={{ alignItems: 'center' }}>
            <div>
              <pre><code><em>&lt;!doctype html&gt;</em>{"\n"}&lt;<b>html</b> <i>lang</i>=<u>"en"</u>&gt;{"\n"}{"  "}&lt;<b>head</b>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>charset</i>=<u>"utf-8"</u>&gt;{"\n"}{"    "}&lt;<b>meta</b> <i>name</i>=<u>"viewport"</u> <i>content</i>=<u>"width=device-width, initial-scale=1"</u>&gt;{"\n"}{"    "}&lt;<b>link</b> <i>rel</i>=<u>"stylesheet"</u> <i>href</i>=<u>"https://unpkg.com/stuffcss@latest/dist/css/stuff.min.css"</u>&gt;{"\n"}{"    "}&lt;<b>title</b>&gt;Hello, world!&lt;/<b>title</b>&gt;{"\n"}{"  "}&lt;/<b>head</b>&gt;{"\n"}{"  "}&lt;<b>body</b>&gt;{"\n"}{"    "}&lt;<b>h1</b>&gt;Hello, world!&lt;/<b>h1</b>&gt;{"\n"}{"    "}&lt;<b>script</b> <i>src</i>=<u>"https://unpkg.com/stuffcss@latest/dist/js/stuff.min.js"</u>&gt;&lt;/<b>script</b>&gt;{"\n"}{"  "}&lt;/<b>body</b>&gt;{"\n"}&lt;/<b>html</b>&gt;</code></pre>
            </div>
            <div>
              <button className="darkmode"></button>
            </div>
          </div>
        </section> */}
        <section>
          <div>
            <div className="grid">
              <div>
                <hgroup>
                  <h1 style={{ fontSize: '3em' }}>Why Stuff?</h1>
                  <h2>Stuff is Link minimalist css framework, Elegant styles for all natives HTML elements </h2>

                </hgroup>
              </div>
              <div style={{ textAlign: 'right' }}>
                <hgroup>
                  <p>Contibutors</p>
                  <Link rel={"noopener"} href="https://github.com/fajarspace/stuff-css/graphs/contributors">
                    <img src="https://contrib.rocks/image?repo=fajarspace/stuff-css" />
                  </Link>
                </hgroup>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
