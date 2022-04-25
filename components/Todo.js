export default function Todo({ item }) {
  return (
    <p>
      {item.id} - {item.task}
    </p>
  );
}
