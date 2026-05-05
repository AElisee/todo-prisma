import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        <p>Todo APP</p>
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
}
