import React from 'react'
import { useContext } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import {userContext} from './Main'



function FrontPage() {
  const {blog} = useContext(userContext)

  // const deleteTask = (ind) => {
  //   setBlog(blog.filter((_,index) => (
  //     ind !== index
  //   )))
  // }

  const navigate = useNavigate()
  const goTo = () => {
    navigate('/CreateBlog')}
  return (
    <div >
        <h1>Blogs</h1>
        <ul>
        {blog.map((blogs,ind) => (
          <li key={blogs.id}>
            <Link to={`/blogs/${blogs.id}`}>{blogs.title}</Link>
            <button onClick={() =>deleteTask(ind)}>delete</button>
            </li>))

        }
        </ul>
        <button onClick={goTo}>Create Blogs</button>
    </div>
  )
}

export default FrontPage