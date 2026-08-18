import {useState} from 'react'
import style from './list.module.css'


export default function List({tasks: initTasks = []}) {
    const [tasks, setTasks] = useState(initTasks);
    const [showCompleted, setShowCompleted] = useState(true);
    let visibleTasks = showCompleted ? tasks : tasks.filter(t => t.state !== "completed");

    function toggleTask(task) {
        setTasks(tasks.map(t => t === task ? {...t, state: t.state === "completed" ? "unfinished" : "completed"} : t));
    }
    function addTask(text) {
        const newTask = {name: text, state:"unfinished"};
        setTasks([...tasks, newTask]);
    }
    function setTaskColor(task){
        return (task.state === "completed" ? "green" : "black");
    }
    return( 
        <>
            <ol className={style.list}>
                {visibleTasks.map(task =>
                <li style={
                    {color: setTaskColor(task), 
                    textDecoration: task.state === "completed" ? "line-through" : "none"
                    }
                }>
                <input type="checkbox" 
                className={style.checkbox}
                checked= {task.state === "completed"}
                onChange={()=> toggleTask(task)}></input>{task.name}</li>)
                }
            </ol>
            <input  type="checkbox" 
                    id="toggle-view" 
                    className={style.checkbox}
                    onChange={()=>{
                        setShowCompleted(showCompleted ? false : true);
                        console.log(showCompleted);
                    }}
                    checked={showCompleted}>
            </input>
            <label className={style.label} htmlFor="toggle-view">Show Completed</label>
            <AddNewTask onAdd={addTask}/>
        </>
    )
}

function AddNewTask({onAdd}){
    const [inputValue, setInputValue] = useState();
    function handleAdd(event){
        event.preventDefault();
        if(inputValue.trim()) {
            onAdd(inputValue.trim());
        }
        else{
            return;
        }
        setInputValue("");
    }
    return(
        <form className={style.form} onSubmit={handleAdd}>
            <p>Add a new task</p>
            <input className={style.textBox} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <button type="submit" style={{fontFamily: "'Georgia' , serif", fontSize:"16px"}}>Enter</button>
        </form>
    )
}




