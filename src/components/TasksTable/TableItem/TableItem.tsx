import "./TableItem.scss";
import { Task } from "../../../types/task";
import { FC, useState } from "react";
import { parseDates, formatCategory } from "../../../utils/utils";
import { useAction } from "../../../hooks/useAction";
import Form from "../../Form/Form";

interface TodoProps {
  item: Task;
}

const TableItem: FC<TodoProps> = ({ item }) => {
  const { removeTask, editTask } = useAction();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const changeStatus = (item: Task) => {
    editTask({ ...item, isArchive: !item.isArchive });
  };

  return (
    <>
      <div className="task">
        <div className="task-name">{item.name}</div>
        <div className="task-created-at">{item.createdAt}</div>
        <div className="task-category">{formatCategory(item.category)}</div>
        <div className="task-content">{item.content}</div>
        <div className="task-parsed-dates">{parseDates(item.content)}</div>
        <div className="buttons">
          <img
            onClick={() => openModal()}
            className="item-btn"
            src="./img/edit.svg"
            alt='edit icon'
          />
          <img
            onClick={() => changeStatus(item)}
            className="item-btn"
            src={item.isArchive ? "./img/restore.svg" : "./img/archive.svg"}
            alt='archive icon'
          />
          <img
            onClick={() => removeTask(item.id)}
            className="item-btn"
            src="./img/delete.svg"
            alt='delete icon'
          />
        </div>
      </div>

      {isOpen ? <Form setIsOpen={setIsOpen} item={item} type="edit" /> : ""}
    </>
  );
};

export default TableItem;
