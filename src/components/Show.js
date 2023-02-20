import React from 'react'
import { useAlert } from 'react-alert'
import './Show.css'

const Show = (props) => {
  const { tasks, setTasks } = props
  const alert = useAlert()
  const taskdelete = (i) => {
    const copytasks = [...tasks]
    copytasks.splice(i, 1)
    setTasks(copytasks)
    alert.info('Task Removed')
  }

  let tasklist = <h1><br /> <br /> No Task</h1>
  if (tasks.length > 0) {
    tasklist = tasks.map((task, index) => {
      return (
        <div className='main'>
          <div className="lists">
            <li className='li' key={index}> <br />
              <span className='span-1'><strong>Title -:</strong> </span> <span className='title'>{task.title}</span> <br /> <span className='span-2'><strong>Desc -:</strong> </span> <span className='desc'>{task.desc}</span>  </li>
            <span className='cross' onClick={() => taskdelete(index)}>❌</span>
          </div>
        </div>
      )
    })
  }
  return (
    <>
      <ul className='box'>{tasklist}</ul>
    </>
  )
}
export default Show