import React from 'react'
import { useAlert } from 'react-alert'
import { useState } from "react"
import css from './Create.module.css'

const Create = (props) => {
  const alert = useAlert()
  const { tasks, setTasks } = props
  const [title, settitle] = useState("")
  const [desc, setDesc] = useState("")

  const submithandler = (e) => {
    (e).preventDefault()
    const task = { title, desc }
    if (!title.trim() || !desc.trim()) {
      alert.info("No field should be empty!!!!!!")
      return;
    }
    setTasks([...tasks, task])
    alert.success('Task Created')
    settitle("")
    setDesc("")
  }
  return (
    <div className={css.input1}>
      <form onSubmit={submithandler}>
        <div className={css.input2}> <h1>Title</h1><input type="text" onChange={(e) => settitle(e.target.value)} placeholder='Title' value={title} /></div>
        <div className={css.input3}><h1>Description</h1> <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder='Description' value={desc} /></div>
        <button>Create Task</button>
      </form>
    </div>
  )
}

export default Create