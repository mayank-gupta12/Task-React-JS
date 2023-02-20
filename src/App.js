import { useState } from "react"
import Create from "./components/Create"
import Show from "./components/Show"
const App = () => {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Create tasks={tasks} setTasks={setTasks}/>
      <Show tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App