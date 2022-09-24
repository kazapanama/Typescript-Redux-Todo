import { useEffect } from "react";

import TodoTable from "./components/TasksTable/TaskTable";

import { useAction } from "./hooks/useAction";

import SummaryTable from "./components/SummaryTable/SummaryTable";

function App() {

  const { fetchTodos } = useAction();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="App">
        <TodoTable title='Active tasks' type='active'/>
        <SummaryTable />
        <TodoTable title='Archived tasks' type='archive'/>

        
      </div>
    </>
  );
}

export default App;
