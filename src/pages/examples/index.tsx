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
              <a href="/examples/accordion">accordion</a>
            </div>
            <div className="card">
              <a href="/examples/button">button</a>
            </div>
            <div className="card">
              <a href="/examples/card">card</a>
            </div>
            <div className="card">
              <a href="/examples/container">container</a>
            </div>
            <div className="card">
              <a href="/examples/flex">flex</a>
            </div>
            <div className="card">
              <a href="/examples/grid">grid</a>
            </div>
            <div className="card">
              <a href="/examples/themes">themes</a>
            </div>
            <div className="card">
              <a href="/examples/typography">typography</a>
            </div>
          </div>
        </section>
      </main>


    </>
  )

}