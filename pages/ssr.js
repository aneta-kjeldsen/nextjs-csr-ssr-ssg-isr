// SSR - Server Side Rendering
import Todo from "@components/Todo";
import Loading from "@components/Loading";
import { getTodos } from "./api";

export default function ServerSideRendered({ data, isLoading = true }) {
  return (
    <main>
      <h1>SSR - Server Side Render</h1>
      <h3>My TODO list:</h3>
      {isLoading && <Loading />}
      {data.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getTodos();
  const isLoading = false;

  return {
    props: {
      data,
      isLoading,
    },
  };
}
