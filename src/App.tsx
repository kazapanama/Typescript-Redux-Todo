import { useEffect } from "react";

import TodoTable from "./components/TasksTable/TaskTable";

import { useAction } from "./hooks/useAction";

import SummaryTable from "./components/SummaryTable/SummaryTable";
import NewTaskButton from "./components/NewTaskButton/NewTaskButton";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { TodoReducerState } from "./types/task";

function App() {
  const { fetchTasks } = useAction();

  useEffect(() => {
    fetchTasks();
  }, []);

  const store = useTypedSelector((state: TodoReducerState) => state);

  if (store.error) {
    return (
      <div className="App">
        <h1 className="info-heading">There was an error</h1>
      </div>
    );
  }

  if (store.loading) {
    return (
      <div className="App">
        <h1 className="info-heading">LOADING</h1>
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <TodoTable title="Active tasks" type="active" />
        <NewTaskButton />
        <SummaryTable />
        <TodoTable title="Archived tasks" type="archive" />
      </div>
    </>
  );
}

export default App;
