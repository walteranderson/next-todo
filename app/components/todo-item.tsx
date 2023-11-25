'use client';

import type { Todo } from "../db";
import { FaRegSquareCheck, FaRegSquare, FaTrash } from "react-icons/fa6";
import IconButton from "./icon-button";
import { useCallback, useState } from "react";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem(props: TodoItemProps) {
  const { todo } = props;
  const [completed, setCompleted] = useState(todo.completed);
  const [deleted, setDeleted] = useState(false);


  const onToggleComplete = useCallback(async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !completed })
    });
    setCompleted(!completed);
  }, [todo, completed]);

  const onDelete = useCallback(async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'DELETE',
    });
    setDeleted(true);
  }, [todo]);

  if (deleted) {
    return null;
  }

  return (
    <div className="flex flex-row items-center gap-1 w-full">
      <IconButton onClick={onToggleComplete} className="hover:bg-gray-200">
        {completed ? <FaRegSquareCheck /> : <FaRegSquare />}
      </IconButton>
      <span className={`flex-1 ${completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <IconButton onClick={onDelete} className="text-red-600 hover:bg-red-200">
        <FaTrash />
      </IconButton>
    </div>
  );
}
