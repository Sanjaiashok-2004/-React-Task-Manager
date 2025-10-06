export default function Taskli({Tasks, deletetask ,togglehandle}){
    return(
        <div className=" task-ul ">
     <ul >

        {
            Tasks.map( (task,index)=>
            <li key={index} 
            
            className="task-li">
                <span
                // className="Name-list"
                 className={task['completed']? 'completed':undefined}
                onClick={
                    ()=>togglehandle(task['id'])
                }
                 >
                       {task['text']}
                </span>
                <span  
                className="deleted-button"
                onClick={
                    ()=>{
                        deletetask( task['id'])
                    }

                }>
                    X
                </span>
            
            </li>
            )}
    </ul>
    </div>
    )
}