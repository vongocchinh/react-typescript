import React, { useEffect, useState } from 'react';

interface Add {
    addTodo: AddTodo,
    todoEdit:Todo
}

export const AddTodo: React.FC<Add> = ({ addTodo,todoEdit }) => {

    const [text, setText] = useState('');
    const [check, setCheck] = useState(false);


    useEffect(() => {
        if(todoEdit){
            setCheck(todoEdit.check);
            setText(todoEdit.text);
        }else{
            setCheck(false);
        setText('');
        }
    }, [todoEdit])
    const onchange = (e: any) => {
        setText(e.target.value);
    }
    const onchangeCheck = (e:any) => {
        setCheck(e.target.checked)
    }
    
    const onSubmit = (e: any) => {
        e.preventDefault();
        var todo: Todo;
        if(todoEdit.id){
            todo= {
                id:todoEdit.id,
                text, check
            }
        }else{
            todo = {
                id:Date.now().toString(),
                text, check
            }
        }
        addTodo(todo);
        setCheck(false);
        setText('');

        e.target.reset();

    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text&&text} onChange={onchange} />
            <input type="checkbox" checked={check?true:false} onClick={onchangeCheck} />
            <input type="submit" />
        </form>
    )
}


export default AddTodo;