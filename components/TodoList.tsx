import { prisma } from "@/lib/prisma";
import { Separator } from "./ui/separator";
import TodoCard from "./TodoCard";

export default async function TodoList() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  console.log(todos);

  if (todos.length === 0) {
    return <p className="text-sm text-gray-500">Aucune tâche</p>;
  }

  return (
    <div className="m-auto flex justify-center flex-wrap gap-5 space-y-3 p-5">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
