// CSR - Client Side Rendering
import { useEffect, useState } from "react";
import Todo from "@components/Todo";
import { getTodos } from "./api";

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const data = await getTodos();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>CSR - Client Side Render</h1>
      {state.map((item) => (
        <Todo key={item.id} item={item}></Todo>
      ))}
    </main>
  );
}
