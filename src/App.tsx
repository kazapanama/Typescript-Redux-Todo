import { useEffect } from "react";
import { TodoReducerState } from "./types/todo";
import TodoTable from "./components/TodoTable";

import { useTypedSelector } from "./hooks/useTypedSelector";
import { useAction } from "./hooks/useAction";

function App() {
  const todos = useTypedSelector((state: TodoReducerState) => state.todos);
  const abs = todos.filter((item) => item.id === 1);
  const { fetchTodos } = useAction();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="App">
        <TodoTable />

        {abs.map((item) => item.name)}
      </div>
    </>
  );
}

export default App;
