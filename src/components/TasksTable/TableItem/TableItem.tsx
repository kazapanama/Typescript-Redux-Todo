import "./TableItem.scss";
import { Todo } from "../../../types/todo";
import { FC } from "react";
import { parseDates } from "../../../utils/utils";
import { useAction } from "../../../hooks/useAction";

interface TodoProps {
  item: Todo;
}

const TableItem: FC<TodoProps> = ({ item }) => {
  const { addTask,removeTask } = useAction();

  const addTest = () => {
    const testTodo: Todo = {
      id: 12,
      name: "asda",
      createdAt: "22.22.22",
      content: "123hadsgaskjgdaksjd22.02.22",
      category: "task",
      isArchive: false,
    };
    addTask(testTodo);
  };

  const removeTest = (id:number) => {
    removeTask(id)
  }



  return (
    <div className="task" key={item.id}>
      <div className="task-name">{item.name}</div>
      <div className="task-created-at">{item.createdAt}</div>
      <div className="task-category">{item.category}</div>
      <div className="task-content">{item.content}</div>
      <div className="task-parsed-dates">{parseDates(item.content)}</div>
      <div className="buttons">
        <button onClick={() => addTest()}>TESTERINO</button>
        <button onClick={() => removeTest(item.id)}>UDALINO</button>
      </div>
    </div>
  );
};

export default TableItem;
