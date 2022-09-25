import { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { Task } from "../../types/task";
import { getDate } from "../../utils/utils";
import "./ModalForm.scss";

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
    <div className="form-bg" onClick={() => closeModal()}>
      <form onSubmit={(e) => submit(e)} onClick={(e) => e.stopPropagation()}>
        <div className="form-question">
          <label htmlFor="name">Task:</label>
          <input
            value={task.name}
            required
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            id="name"
          />
        </div>

        <div className="form-question">
          <label htmlFor="description">Description:</label>
          <textarea
            value={task.content}
            onChange={(e) => setTask({ ...task, content: e.target.value })}
            id="description"
          />
        </div>

        <div className="form-question">
          <label htmlFor="category">Category:</label>
          <select
            onChange={(e) => setTask({ ...task, category: e.target.value })}
            defaultValue={task.category}
            id="category"
          >
            <option value="task">Task</option>
            <option value="idea">Idea</option>
            <option value="randomThought">Random Though</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
