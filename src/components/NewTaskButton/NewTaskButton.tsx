import { FC, useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

interface NewTaskButtonProps {
  text: string;
}

const NewTaskButton: FC<NewTaskButtonProps> = ({ text }) => {
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
        {text}
      </button>
      {isOpen ? <ModalForm setIsOpen={setIsOpen} type="add" /> : ""}
    </>
  );
};

export default NewTaskButton;
