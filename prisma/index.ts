import { PrismaClient, Todo } from '@prisma/client'

export type { Todo };

export const prisma = new PrismaClient();
