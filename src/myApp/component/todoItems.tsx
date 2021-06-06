import React from 'react';

interface Item {
    todo: Todo,
    toggleTodo: ToggleTodo,
    onEdit: OnEdit,
    onDelete:OnDelete
}


export const TodoItem: React.FC<Item> = ({ todo, toggleTodo, onEdit,onDelete }) => {

    const onclick = () => {
        onEdit(todo);
    }
    const onclickDelete=()=>{
        onDelete(todo);
    }
    return (
        <>
            <p>
                <> <input checked={todo.check} type="checkbox" onChange={() => toggleTodo(todo)} />
                    {todo.text}
                    &nbsp;
                    <span onClick={onclick}>Edit</span>
                    <span onClick={onclickDelete}>delete</span></>
            </p>
        </>
    )
}


export default TodoItem;