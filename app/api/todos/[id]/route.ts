import { updateTodo, deleteTodo } from "@/app/db";

type Context = {
  params: {
    id: string;
  };
};

export async function PATCH(req: Request, ctx: Context) {
  const id = Number(ctx.params.id);
  const body = await req.json();

  try {
    const updated = await updateTodo(id, body);
    return Response.json(updated);
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(_: Request, ctx: Context) {
  const id = Number(ctx.params.id);
  try {
    await deleteTodo(id);
    return new Response(null, { status: 204 });
  } catch (e) {
    return new Response(null, { status: 500 });
  }
}
