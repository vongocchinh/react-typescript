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
            <div className="item">
                 <input checked={todo.check} type="checkbox" onChange={() => toggleTodo(todo)} />
                    <p className="text">{todo.text}</p>
                    <div  className="option"><p onClick={onclick}>
                    <i className='fas fa-edit' style={{fontSize:24,color:'blue'}}></i>
                    </p>
                    <p onClick={onclickDelete}>
                    <i className='fas fa-trash-alt' style={{fontSize:24,color:'red'}}></i></p></div>
            </div>
        </>
    )
}


export default TodoItem;