type Todo={
    id:string
    text:string,
    check:boolean
}

type ToggleTodo=(todoSelector:Todo)=> void


type AddTodo=(todo:Todo)=> void


type OnEdit=(todo:Todo)=>void
type OnDelete=(todo:Todo)=>void