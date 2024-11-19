import React, { useContext, useState } from 'react'
import { userContext } from './Main'
import {useNavigate} from 'react-router-dom'

function CreateBlog() {
    const {blog,setBlog} = useContext(userContext)
    const navigate = useNavigate()
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const [color,setColor] = useState('#fff')

    const handleSubmit = (e) => {
        e.preventDefault()
        setBlog([...blog, {title,body,id:Date.now(),color}])
        setTitle('')
        setBody('')
        navigate('/')
    }

  return (
    <div><h1>Create Your blog </h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} required onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='body' value={body} required onChange={(e) => setBody(e.target.value)}/>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button type="submit" >Create</button>
    </form>
    </div>
  )
}

export default CreateBlog