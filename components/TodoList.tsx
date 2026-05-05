import { prisma } from "@/lib/prisma";

export default async function TodoList() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (todos.length === 0) {
    return <p className="text-sm text-gray-500">Aucune tâche</p>;
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div key={todo.id} className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-semibold">{todo.title}</h3>
          <p className="text-sm text-gray-500">{todo.desc}</p>
        </div>
      ))}
    </div>
  );
}
