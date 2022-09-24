import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Todo, TodoReducerState } from "../../types/todo";
import SummaryTableHeader from "./SummaryTableHeader/SummaryTableHeader";
import SummaryTableItem from "./SummaryTableItem/SummaryTableItem";
import { formatCategory,getSummaryIfno } from "../../utils/utils";


const SummaryTable = () => {
  const todos = useTypedSelector((state: TodoReducerState) => state.todos);

 const render = (todos:Todo[]) => {
   let tree = getSummaryIfno(todos)
    let result = []
    

    for (let key in tree){
        result.push(<SummaryTableItem category={formatCategory(key)} active={tree[key]['active']} archive={tree[key]['archive']} />)
    }

    return result
 }

 



  return (
    <>
        <SummaryTableHeader title="Summary" />
        {render(todos)}
        
    </>
        
  )
}

export default SummaryTable;
