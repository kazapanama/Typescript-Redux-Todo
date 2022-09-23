import {FC} from 'react'
import './TableHeader.scss'

interface TodoHeaderTitle  {
    title:string
}



const TableHeader:FC<TodoHeaderTitle> = ({title}) => {
    return(
       <h2>{title}</h2> 
    )
}
export default TableHeader