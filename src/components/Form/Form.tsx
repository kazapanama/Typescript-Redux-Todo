import { FC ,useState} from "react";
import { useAction } from "../../hooks/useAction";
import { Todo } from "../../types/todo";
import "./Form.scss";



interface FormProps {
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
    type:'edit'|'submit'
    item?:Todo | undefined
}



const Form:FC<FormProps> = ({setIsOpen,item,type}) => {
    
    let defaultTask:Todo = {
        name:'',
        id:Date.now(),
        createdAt:'asdasd',
        category:'asd',
        isArchive:false,
        content:''
    }

    const {addTask,editTask } = useAction();
        const [task,setTask] = useState<Todo>(item || defaultTask)
        
    



   const closeModal = () => {
    setIsOpen(false)
   }
    
    
    const submit = (e:React.SyntheticEvent) => {
        e.preventDefault()

        if (type === 'submit'){
            addTask(task)
        }
        
        if (type === 'edit'){
            editTask(task)
            closeModal()
        }
    }
   
   
   
   return(


<div className="form-bg">
    <form onSubmit={(e)=>submit(e)}>
        <button onClick={closeModal}>X</button>
      <div className="form-question">
        <label>Task:</label>
        <input  value={task.name} onChange={e=>setTask({...task,name:e.target.value})}/>
      </div>

      <div className="form-question">
        <label>Description:</label>
        <textarea value={task.content} onChange={e=>setTask({...task,content:e.target.value})}/>
      </div>

      <div className="form-question">
        <label>Category:</label>
        <select onChange={e=>setTask({...task,category:e.target.value})}>
            <option value='task'>Task</option>
            <option value='idea'>idea</option>
            <option value='randomThought'>Random Though</option>
        </select>

        <label>{task.category}</label>
      </div>

      <button>Submit</button>
    </form>
  </div>
    )
  
};

export default Form