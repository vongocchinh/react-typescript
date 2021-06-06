/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import './App.css'
import { Todo } from './component/todo';


const initialState:Array<Todo>=[
    {id:"1",text:"vo ngoc chinh",check:true}
]
export const App:React.FC=()=>{

    const [todo, setTodo] = useState(initialState)
    const [edit, setEdit] = useState({
        id:'',
        text:'',
        check:false
    })

    const toggleTodo:ToggleTodo=(todoSelector:Todo)=>{
        const newTodo=todo.map((item)=>{
            if(item===todoSelector){
                return{
                    ...todoSelector,
                    check:!todoSelector.check
                }
            }
            return item;
        })
        setTodo(newTodo);
    }

    const addTodo:AddTodo=(todoAdd:Todo)=>{
        var index=findIndex(todo,todoAdd);
        if(index !== -1){
            const newList = replaceItemAtIndex(todo, index,todoAdd);
            setTodo(newList)
        }else{
            setTodo([...todo,todoAdd]);
        }
    }
    
    const onEdit=(todoEdit:Todo)=>{
        setEdit({
            id:todoEdit.id,
            text:todoEdit.text,
            check:todoEdit.check
        });
    }

    const onDelete=(todoDelete:Todo)=>{
        var index=findIndex(todo,todoDelete);
        if(index !==-1){
            var newTodo=deleteItemAtIndex(todo,index);
            setTodo(newTodo);
        }
    }
    var findIndex=(data:Array<Todo>,name:Todo)=>{
        var i=-1;
        for(let j=0;j<data.length;j++){
            if(data[j].id===name.id){
                i=j;
            }
        }
        return i;
    }
    
    const replaceItemAtIndex=(arr:Array<Todo>, index:any, newValue:Todo)=>{
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
      }
      const deleteItemAtIndex=(arr:Array<Todo>, index:any)=>{
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
      }
    return (
        <div className="container">
            <h3>Todo TypeScript</h3>
            <div className="container-layout">
            <Todo  OnEdit={onEdit} toggleTodo={toggleTodo} addTodo={addTodo} todoArr={todo} todoEdit={edit} onDelete={onDelete} />
            </div>
        </div>
       
    )
}

export default App;