import { useState } from "react"

export default function Taskfor( {addtask}){
    const [Value,setValue]=useState(" ");
    
    const handsubmit =(e)=>{
        e.preventDefault();
        console.log("form submitted",Value)
        addtask(Value)
        setValue("  ")
    }


     
    


    return <div  >
    <form 
    className="forms"
    action="" onSubmit={handsubmit}>
        <input type="text" 
        className="inputvalue"
        placeholder=" enter your name"
        value={Value}

        onChange={(e)=>{
            setValue(e.target.value)
        } 
      }
        />
        <button 
        className="submitbutton"
         typeof="submit">submit</button>
    </form>
    </div>
    
}