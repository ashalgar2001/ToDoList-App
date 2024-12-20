import './CSS/TodoItems.css'
import check from './Assets/check.png';
import nocheck from "./Assets/nocheck.png";
import radio from "./Assets/radio.png";

export const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos")); 
        data = data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0;i<data.length;i++)
        {
            if (data[i].no===no) {
                if (data[i].display==="") {
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }

  return (
    
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img src={radio} alt="Unchecked" className='icon' />:<img src={check} alt="Checked" className='icon'/>}
            
            <div className="todoitems-text">{text}</div>
        </div>
        <img onClick={()=>{deleteTodo(no)}} src={nocheck} alt="cross" className='todoitems-crossicon' />

    </div>
  )
}
