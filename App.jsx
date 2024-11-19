import React from 'react'
import FrontPage from './components/Front'
import CreateBlog from './components/CreateBlog'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contents from './components/Contents'
import Main from './components/Main'


function App() {

  return (
    <Router>
      
        <Main>

        <Routes>
          <Route path='/CreateBlog' element={<CreateBlog/>}></Route>
          <Route path='/' element={<FrontPage/>}></Route>
          <Route path='/blogs/:id' element={<Contents/>}></Route>
        </Routes>

        </Main>

     
      </Router>

  )
}

export default App
