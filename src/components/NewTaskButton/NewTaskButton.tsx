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
      <button
        className="flex justify-center items-center text-white text-2xl w-full font-bold border-4 border-white rounded-md py-2 hover:bg-white hover:text-blue-500 transition-colors"
        onClick={() => openModal()}
      >
        + Add new Task
      </button>
      {isOpen ? <ModalForm setIsOpen={setIsOpen} type="add" /> : ""}
    </>
  );
};

export default NewTaskButton;
