// SSG - Static Site Generation
import Todo from "@components/Todo";
import Loading from "@components/Loading";
import { getTodos } from "./api";

export default function StaticSiteGeneration({ data, isLoading = true }) {
  return (
    <main>
      <h1>SSG - Static Site Generation</h1>
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
  };
}
