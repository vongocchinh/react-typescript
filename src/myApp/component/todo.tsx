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
        <div className="container-list">
        <div className="list">
        {showItem(todoArr)}
        </div>
        <AddTodo addTodo={addTodo} todoEdit={todoEdit} />
        </div>
    )
}

export default Todo;