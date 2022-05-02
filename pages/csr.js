// CSR - Client Side Rendering
import { useEffect, useState } from "react";
import Todo from "@components/Todo";
import Loading from "@components/Loading";
import { getTodos } from "./api";

export default function ClientSideRendered() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const data = await getTodos();
    setState(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>CSR - Client Side Render</h1>
      {isLoading && <Loading />}
      {state.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}
