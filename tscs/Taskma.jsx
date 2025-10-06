import { useState } from "react"
import Taskfor from "./taskfor"
import Taskli from "./Taskli"

import "./task.css";

export default function Taskma(){
    const [Tasks,setTasks] = useState([])


    const addtask = (text)=>{
        const newTask={
            id:Date.now(),
            text,
            completed:false
        };
    setTasks([...Tasks, newTask])
    }


    const togglehandle=(id)=>{
        setTasks( Tasks.map(
            (Tasks)=>{
                return Tasks.id==id ?{...Tasks,completed:!Tasks.completed}:Tasks

            }
        )) 
        
    }




    const deletetask =(id)=>{
        const filtertask = Tasks.filter((task)=>{
           return  task['id'] !== id
        }
        )
        setTasks(filtertask)
    }
    
    return < >
   
    <h1 className="titlename">Task Manager</h1>
    <Taskfor addtask={addtask}/>
    <Taskli Tasks={Tasks}
     deletetask={ deletetask}
     togglehandle={togglehandle}
    />
    <p  className="count-number">Task :{Tasks.length}</p>

    </>
}