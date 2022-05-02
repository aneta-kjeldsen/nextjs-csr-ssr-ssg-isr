// CSR - Client Side Rendering
import { useEffect, useState } from "react";
import Todo from "@components/Todo";
import Loading from "@components/Loading";
import { getTodos } from "./api";

export default function ClientSideRendered() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setData(await getTodos());
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>CSR - Client Side Render</h1>
      <h3>My TODO list:</h3>
      {isLoading && <Loading />}
      {data.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}
