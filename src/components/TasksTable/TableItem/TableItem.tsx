import "./TableItem.scss";
import { Todo } from "../../../types/todo";
import { FC,useState } from "react";
import { parseDates } from "../../../utils/utils";
import { useAction } from "../../../hooks/useAction";
import Form from '../../Form/Form'


interface TodoProps {
  item: Todo;
}

const TableItem: FC<TodoProps> = ({ item }) => {
  const {removeTask } = useAction();

  const [isOpen,setIsOpen] = useState(false)
  // const addTest = () => {
  //   const testTodo: Todo = {
  //     id: 12,
  //     name: "asda",
  //     createdAt: "22.22.22",
  //     content: "123hadsgaskjgdaksjd22.02.22",
  //     category: "task",
  //     isArchive: false,
  //   };
  //   addTask(testTodo);
  // };



  const removeTest = (id:number) => {
    removeTask(id)
  }



  return (
    <>
    <div className="task">
      <div className="task-name">{item.name}</div>
      <div className="task-created-at">{item.createdAt}</div>
      <div className="task-category">{item.category}</div>
      <div className="task-content">{item.content}</div>
      <div className="task-parsed-dates">{parseDates(item.content)}</div>
      <div className="buttons">
        <button onClick={()=>setIsOpen(true)}>TESTERINO</button>
        <button onClick={() => removeTest(item.id)}>UDALINO</button>
      </div>
    </div>
    
    {isOpen ? <Form setIsOpen={setIsOpen} item={item} type='edit'/> : ''}
    </>
    
  );
};

export default TableItem;
