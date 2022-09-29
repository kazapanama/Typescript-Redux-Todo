import { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { Task } from "../../types/task";
import { getDate } from "../../utils/utils";

interface FormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "edit" | "add";
  item?: Task | undefined;
}

const Form: FC<FormProps> = ({ setIsOpen, item, type }) => {
  let defaultTask: Task = {
    name: "",
    id: Date.now(),
    createdAt: getDate(),
    category: "task",
    isArchive: false,
    content: "",
  };

  const { addTask, editTask } = useAction();
  const [task, setTask] = useState<Task>(item || defaultTask);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (type === "add") {
      addTask(task);
    }

    if (type === "edit") {
      editTask(task);
    }
    closeModal();
  };

  return (
    <div
      className="fixed bg-slate-800 bg-opacity-40  w-screen h-screen top-0 left-0 flex justify-center items-center"
      onClick={() => closeModal()}
    >
      <form
        className="bg-white w-96 h-96 flex flex-col justify-center items-center gap-5 rounded-2xl"
        onSubmit={(e) => submit(e)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <label className="font-semibold text-lg" htmlFor="name">
            Task:
          </label>
          <input
            className="border-2 border-blue-200 w-52 focus:border-blue-500 focus:outline-none"
            value={task.name}
            required
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            id="name"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-lg" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border-2 border-blue-200 w-52 focus:border-blue-500 focus:outline-none h-24 resize-none"
            value={task.content}
            onChange={(e) => setTask({ ...task, content: e.target.value })}
            id="description"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-lg" htmlFor="category">
            Category:
          </label>
          <select
            className="border-2 border-blue-200 w-52 focus:border-blue-500 focus:outline-none select:bg-blue-500"
            onChange={(e) => setTask({ ...task, category: e.target.value })}
            defaultValue={task.category}
            id="category"
          >
            <option value="task">Task</option>
            <option value="idea">Idea</option>
            <option value="randomThought">Random Though</option>
          </select>
        </div>

        <button className="border-2 border-white bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
