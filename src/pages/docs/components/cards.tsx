import Layout from "../../../components/layout";

export default function Cards() {
  return (
    <Layout pageTitle="Cards" >
      <hgroup>
        <h1>Cards</h1>
        <h2>A flexible container with graceful spacings across devices and viewports.</h2>
      </hgroup>
      <h1>Example</h1>
      <div className="card">
        <div className="title">Title</div>
        <p>I'm card</p>
      </div>
      <pre><code>&lt;<b>div</b> <i>class</i>=<u>"card"</u>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"title"</u>&gt;{"\n"}{"    "}Title{"\n"}{"  "}&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;I'm a card&lt;/<b>p</b>&gt;{"\n"}&lt;/<b>div</b>&gt;</code></pre>
      <h2>with <code><b>img</b></code> </h2>
      <div className="card">
        <div className="title"> <img src="https://play-lh.googleusercontent.com/y3eaXRp7E7JfproxFtRIf60pVkmgcPNCxIhx_P7Ith_u3jZufHLnZspbc0bC3t2k5A" alt="" />Header</div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa pariatur alias in officia minus eum. Autem
          labore quasi accusamus enim est maxime ullam ipsam at exercitationem sapiente. Fugiat, libero modi?</p>
        <div><small>Footer (optional)</small></div>
      </div>
      <pre><code>&lt;<b>div</b> <i>class</i>=<u>"card"</u>&gt;{"\n"}{"  "}&lt;<b>div</b> <i>class</i>=<u>"title"</u>&gt;{"\n"}{"    "}&lt;<b>img</b> <i>src</i>=<u>"#"</u>/&gt;{"\n"}{"    "}Header{"\n"}{"  "}&lt;/<b>div</b>&gt;{"\n"}{"  "}&lt;<b>p</b>&gt;description&lt;/<b>p</b>&gt;{"\n"}{"  "}&lt;<b>small</b>&gt;Footer&lt;/<b>small</b>&gt;{"\n"}&lt;/<b>div</b>&gt;</code></pre>
    </Layout>
  )
}
