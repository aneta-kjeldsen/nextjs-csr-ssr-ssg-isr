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

      <main class="full-width center">
        <h1>CSR, SSR, SSG & ISR</h1>
        <h2>Weird and scary acronyms explained!</h2>
        <nav>
          <a href="./csr">Client Side Rendering</a>&nbsp;|&nbsp;
          <a href="./ssr">Server Side Render</a>&nbsp;|&nbsp;
          <a href="./ssg">Static Site Generation</a>&nbsp;|&nbsp;
          <a href="./isr">Incremental Static Regeneration</a>
        </nav>
      </main>
    </div>
  );
}
