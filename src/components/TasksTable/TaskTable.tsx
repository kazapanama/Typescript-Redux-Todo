import { FC } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TodoReducerState } from "../../types/todo";
import TableHeader from './TasksTableHeader/TableHeader'
import TableItem from "./TableItem/TableItem";


interface TasksTableProps {
    title:string;
    type:string;
}


const TodoTable:FC<TasksTableProps> = ({title,type}) =>{
    
    const todos = useTypedSelector((state: TodoReducerState) => state.todos);
    const activeTasks = todos.filter(task=>task.isArchive === false)
    const archiveTasks = todos.filter(task=>task.isArchive === true)
    
    
    return(
        <section>
            <TableHeader title={title}/>
            {type === 'active' ? activeTasks.map(item => <TableItem item={item} />) : archiveTasks.map(item => <TableItem item={item} />)}
            
            
            
        
        </section>
    )
}

export default TodoTable