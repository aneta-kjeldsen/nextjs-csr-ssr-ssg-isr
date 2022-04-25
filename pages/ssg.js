// SSG - Static Site Generation
import Todo from "@components/Todo";
import { getTodos } from "./api";

export default function StaticSiteGeneration({ data }) {
  return (
    <main>
      <h1>SSG - Static Site Generation</h1>
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
  };
}
