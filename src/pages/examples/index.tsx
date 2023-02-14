import Navbar from "../../components/navbar";

export default function Examples() {
  return (
    <>
      <Navbar />
      <main className="container-fluid" >

        <br /><br />
        <h2>Examples</h2>
        <section>
          <div className="grid-auto">
            <div className="card">
              <a href="/examples/accordion">Accordion</a>
            </div>
            <div className="card">
              <a href="/examples/button">Button</a>
            </div>
            <div className="card">
              <a href="/examples/card">Card</a>
            </div>
            <div className="card">
              <a href="/examples/container">Container</a>
            </div>
            <div className="card">
              <a href="/examples/dropdown">Dropdown</a>
            </div>
            <div className="card">
              <a href="/examples/flex">Flex</a>
            </div>
            <div className="card">
              <a href="/examples/grid">Grid</a>
            </div>
            <div className="card">
              <a href="/examples/themes">Themes</a>
            </div>
            <div className="card">
              <a href="/examples/typography">Typography</a>
            </div>
          </div>
        </section>
      </main>


    </>
  )

}