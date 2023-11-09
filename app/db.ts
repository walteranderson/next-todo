import { prisma, type Todo } from '@/prisma';

export type { Todo };

export async function getTodos(): Promise<Todo[]> {
  return await prisma.todo.findMany();
}

export async function createTodo(text: string): Promise<Todo> {
  const todo = await prisma.todo.create({
    data: {
      text,
      completed: false,
    },
  });
  return todo;
}

export async function updateTodo(id: number, todo: Partial<Todo>): Promise<Todo> {
  const updated = await prisma.todo.update({
    where: { id },
    data: todo,
  });
  return updated;
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({ where: { id } });
}
