// SSR - Server Side Rendering
import Todo from "@components/Todo";
import { getTodos } from "./api";

export default function ServerSideRendered({ data }) {
  return (
    <main>
      <h1>SSR - Server Side Render</h1>
      {data.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getTodos();

  return {
    props: {
      data,
    },
  };
}
