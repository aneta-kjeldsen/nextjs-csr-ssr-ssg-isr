// ISR - Incremental Static Regeneration
import Todo from "@components/Todo";
import Loading from "@components/Loading";
import { getTodos } from "./api";

export default function IncrementalStaticRegeneration({
  data,
  isLoading = true,
}) {
  return (
    <main>
      <h1>ISR - Incremental Static Regeneration</h1>
      <h3>My TODO list:</h3>
      {isLoading && <Loading />}
      {data.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const data = await getTodos();
  const isLoading = false;

  return {
    props: {
      data,
      isLoading,
    },
    revalidate: 10,
  };
}
