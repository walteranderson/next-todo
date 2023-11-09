import { prisma , type Todo } from '@/prisma';

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
