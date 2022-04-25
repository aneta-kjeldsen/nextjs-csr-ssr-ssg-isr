import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          SSR, SSG, CSR, ISR & ISR on demand - weird and scary acronyms
          explained!
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>CSR, SSR, SSG, ISR & ISR on demand</h1>
        <h2>Weird and scary acronyms explained!</h2>
        <nav>
          <a href="./csr">Client Side Rendering</a>&nbsp;|&nbsp;
          <a href="./ssr">Server Side Render</a>&nbsp;|&nbsp;
          <a href="./ssg">Static Site Generation</a>&nbsp;|&nbsp;
          <a href="./isr">Incremental Static Regeneration</a>&nbsp;|&nbsp;
          <a href="./isr-on-demand">
            Incremental Static Regeneration on Demand
          </a>
        </nav>
      </main>
    </div>
  );
}
