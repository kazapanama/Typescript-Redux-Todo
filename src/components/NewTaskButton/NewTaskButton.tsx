import "./NewTaskButton.scss";
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

const NewTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button className="add-task" onClick={() => openModal()}>
        + Add new Task
      </button>
      {isOpen ? <ModalForm setIsOpen={setIsOpen} type="add" /> : ""}
    </>
  );
};

export default NewTaskButton;
