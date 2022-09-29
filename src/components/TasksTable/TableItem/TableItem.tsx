import { Task } from "../../../types/task";
import { FC, useState } from "react";
import { parseDates, formatCategory } from "../../../utils/utils";
import { useAction } from "../../../hooks/useAction";
import ModalForm from "../../ModalForm/ModalForm";

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
      <div className="bg-white text-stone-800 flex content-between gap-24 items-center p-2  pl-0 border-b-2  text-sm last-of-type:mb-5 last-of-type:border-none last-of-type:rounded-b-xl last-of-type:shadow-lg">
        <div className="lg:w-32 pl-5 text-base font-bold ">{item.name}</div>
        <div className="lg:w-20 text-center">{item.createdAt}</div>
        <div className="lg:w-20 text-center font-medium">
          {formatCategory(item.category)}
        </div>
        <div className="lg:w-52 font-semibold break-words">{item.content}</div>
        <div className="lg:w-20 text-center">{parseDates(item.content)}</div>
        <div className="flex gap-2 pr-5">
          <img
            onClick={() => openModal()}
            className="w-10 border-2 border-blue-500 rounded-full p-2 bg-blue-500 hover:bg-black hover:border-orange-500 hover:invert cursor-pointer transition-all"
            src="./img/edit.svg"
            alt="edit icon"
          />
          <img
            onClick={() => changeStatus(item)}
            className="w-10 border-2 border-blue-500 rounded-full p-2 bg-blue-500 hover:bg-black hover:border-orange-500 hover:invert cursor-pointer transition-all"
            src={item.isArchive ? "./img/restore.svg" : "./img/archive.svg"}
            alt="archive icon"
          />
          <img
            onClick={() => removeTask(item.id)}
            className="w-10 border-2 border-blue-500 rounded-full p-2 bg-blue-500 hover:bg-black hover:border-orange-500 hover:invert cursor-pointer transition-all"
            src="./img/delete.svg"
            alt="delete icon"
          />
        </div>
      </div>

      {isOpen ? (
        <ModalForm setIsOpen={setIsOpen} item={item} type="edit" />
      ) : (
        ""
      )}
    </>
  );
};

export default TableItem;
