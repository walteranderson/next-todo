'use client';

import type { Todo } from "../db";
import { FaRegSquareCheck, FaRegSquare, FaTrash } from "react-icons/fa6";
import IconButton from "./icon-button";
import { useCallback } from "react";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem(props: TodoItemProps) {
  const { todo } = props;


  const onToggleComplete = useCallback(async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed })
    });
  }, [todo]);

  const onDelete = useCallback(async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'DELETE',
    });
  }, [todo]);

  return (
    <div className="flex flex-row items-center gap-1 w-full">
      <IconButton onClick={onToggleComplete} className="hover:bg-gray-200">
        {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
      </IconButton>
      <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <IconButton onClick={onDelete} className="text-red-600 hover:bg-red-200">
        <FaTrash />
      </IconButton>
    </div>
  );
}
