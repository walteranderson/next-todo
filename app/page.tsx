import { revalidatePath } from "next/cache";
import { createTodo, getTodos } from "./db";
import TodoItem from "./components/todo-item";
import TodoForm from "./components/todo-form";

export default async function Home() {
  async function create(data: FormData) {
    'use server'
    await createTodo(data.get('text') as string);
    revalidatePath('/');
  }

  const todos = await getTodos();

  return (
    <main className="flex flex-col gap-2 max-w-[500px] mx-auto items-center">
      <h1 className="text-5xl font-bold my-6">Next Todos</h1>

      {todos && todos.length > 0
        ? todos.map((todo) => <TodoItem todo={todo} />)
        : <p className="text-gray-400">No todos yet.</p>}

      <TodoForm onSubmit={create} />
    </main>
  );
}
