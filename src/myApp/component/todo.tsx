import React from 'react';
import { TodoItem } from './todoItems';
import { AddTodo } from './add';

interface TodoList{
    todoArr:Array<Todo>,
    toggleTodo:ToggleTodo,
    addTodo:AddTodo,
    OnEdit:OnEdit,
    todoEdit:Todo,
    onDelete:OnDelete
}

export const Todo: React.FC<TodoList>=({todoArr,toggleTodo,addTodo,OnEdit,todoEdit ,onDelete})=>{


    const showItem=(todoArr:Array<Todo>)=>{
        return todoArr.map((item,key)=>{
            return (
                <TodoItem onEdit={OnEdit} todo={item} key={key} toggleTodo={toggleTodo} onDelete={onDelete} />
            )
        })
    }
    return(
        <>
        {showItem(todoArr)}
        <AddTodo addTodo={addTodo} todoEdit={todoEdit} />
        </>
    )
}

export default Todo;