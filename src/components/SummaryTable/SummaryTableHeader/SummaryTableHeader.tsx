import {FC} from 'react'
import './SummaryTableHeader.scss'

interface TodoHeaderTitle  {
    title:string
}



const SummaryTableHeader:FC<TodoHeaderTitle> = ({title}) => {
    return(
       <div className='summary-table-header'>
            <h2 className='summary-table-title'>{title}</h2>
            <div className='summary-table-columns'>
                
                    <span>List of categories</span>
                   
                    <div>
                        <span>Active</span>
                        <span>Passive</span>
                    </div>
                    
                
            </div>
       </div>
        
    )
}
export default SummaryTableHeader