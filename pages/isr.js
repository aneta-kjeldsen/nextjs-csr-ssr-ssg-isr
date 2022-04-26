// ISR - Incremental Static Regeneration
import Todo from "@components/Todo";
import { getTodos } from "./api";

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <main>
      <h1>ISR - Incremental Static Regeneration</h1>
      {data.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const data = await getTodos();

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}
