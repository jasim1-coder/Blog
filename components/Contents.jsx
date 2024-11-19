import React,{useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { userContext } from './Main'

function Contents() {
    const navigate = useNavigate()
const {id} = useParams()
const {blog} = useContext(userContext)
const specific = blog.find((blogs) => blogs.id === Number(id))

  return (
    <div>
        <div style={{ background:(specific.color)}}>
        <h1>Blogs contents</h1>
        <h1>Title: {specific.title}</h1>
        <p>Body: {specific.body}</p>
        </div>
        <button onClick={()=> navigate('/')}>Go Back</button>
    </div>

  )
}

export default Contents