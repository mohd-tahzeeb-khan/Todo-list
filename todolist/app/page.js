"use client"

import React, { useState } from 'react'

function page() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])
  let renderTask=<h2>No task Available</h2>
  renderTask=mainTask.map((t, i)=>{
    return <div className='flex ml-5'>
      <h5 className='ml-5 text-5xl'>{t.title}</h5>
      <h5 className='ml-5 text-5xl'>{t.description}</h5>
    </div>
  })
  const submit=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, description}])
    console.log(title)
    console.log(description)

  }
  return (
    <>
      <h1 className='bg-black text-amber-400 p-5 text-center font-bold text-5xl'>Todo List</h1>
      <form onSubmit={submit}>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-50 px-4 py-2' 
        placeholder='Enter Task Here' 
        value={title} 
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
        />
        <input type='text' 
        className='border-4 border-zinc-800 m-50 px-4 py-2 text-2xl' 
        placeholder='Enter Description Here' 
        value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }} />
        <button className='rounded text-3xl py-5 px-5 bg-green-400 text-black m-10'>Add</button>
      </form>
      <hr />
      <div className='h-5 bg-zinc-800'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page