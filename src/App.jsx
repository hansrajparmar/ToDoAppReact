import {useState} from 'react'

const App = () => {
  const [task, setTask] = useState([])
  const [name, setName] = useState([])
  const [desc, setDesc] = useState([])

  const addtodo = ()=>{
    const data = {
      task:name,
      description:desc,
      id:Date.now()
    }
    // console.log(data);
    setTask([...task, data])
  }

  const deletee = (value)=>{
    setTask(task.filter((e)=>e.id !== value))
  }
  console.log(task);


  return (
    <>
    <input type="text"
           value={name}
           placeholder="task"
           onChange={(e)=>setName(e.target.value)} 
    />
    <input type="text"
           value={desc} 
           placeholder="description"
           onChange={(e)=>setDesc(e.target.value)}
    />
    <button onClick={addtodo}>Submit</button>
    <div>
      <h1>Task</h1>
      {task.map((e,i)=>
      <div key={i}>
        <p>NAME: {e.task}</p>
        <p>DESCRIPTION: {e.description}</p>
        <button onClick={()=>deletee(e.id)}>😎</button>
        <hr />
      </div>
      )}
    </div>

    </>
    )
}

export default App