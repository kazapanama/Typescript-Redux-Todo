import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TodoReducerState } from "../../types/task";
import TableHeader from "./TasksTableHeader/TableHeader";
import TableItem from "./TableItem/TableItem";

interface TasksTableProps {
  title: string;
  type: string;
}

const TodoTable: FC<TasksTableProps> = ({ title, type }) => {
  const tasks = useTypedSelector((state: TodoReducerState) => state.tasks);
  const activeTasks = tasks.filter((task) => task.isArchive === false);
  const archiveTasks = tasks.filter((task) => task.isArchive === true);

  return (
    <section>
      <TableHeader title={title} />
      {type === "active"
        ? activeTasks.map((item) => <TableItem item={item} key={item.id} />)
        : archiveTasks.map((item) => <TableItem item={item} key={item.id} />)}
    </section>
  );
};

export default TodoTable;
