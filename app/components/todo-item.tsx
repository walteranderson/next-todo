import type { Todo } from "../db";

export default function TodoItem(props: { todo: Todo }) {
  const { todo } = props;
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
}
