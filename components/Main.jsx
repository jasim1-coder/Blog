import React, { createContext, useState } from 'react'

export const userContext = createContext()

function Main({children}) {
    const[blog,setBlog] = useState([])

  return (
    <div>
        <userContext.Provider value={{blog,setBlog}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default Main