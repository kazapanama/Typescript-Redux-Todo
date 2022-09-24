import { Todo } from "../types/todo"

export function formatMaxWidth(title:string):string{
    return (title.length > 350) ? title.slice(0,27) + '...': title  
}

export function formatCategory(category:string):string{
    switch(category){
        case 'task':
            return 'Task'

        case 'randomThought':
            return 'Random Thought'
        
        default: return 'Idea'

    }
}

export function getDate():string{
    return new Date().toLocaleDateString()
}

export function parseDates(content:string):string{ 
    const reg = /\d{2}[/\.-]\d{2}[/\.-](?:\d{4}|\d{2})/g
    let dates = content.match(reg)
    if (dates){
        return dates.join('\n')
    }
    return ''
}


export function getSummaryIfno(allTodos:Todo[]){

    //get list of unique categories
    let listOfCategories =Array.from(new Set(allTodos.map(item=>item.category))) 
    
    //mock for return object
    let categoriesTree:any = {}
    
    //filling mock with categories, and setting initial values as 0
    listOfCategories.forEach(category=>{
      categoriesTree[category]= {
      active:0,
      archive:0
      }
    })
    
    //filling mock with data
    allTodos.forEach(item=>{
        categoriesTree[item.category][!item.isArchive ? 'active' : 'archive'] +=1 
      })
      return categoriesTree
    }