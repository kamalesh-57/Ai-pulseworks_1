import React from 'react'
import Navbar from './Navbar'
import './App.css'
function App() {
  let courses = ['ds','cs']
  return ( 
    <div>
      {
      courses.map((c)=>
        {c? <div>{c}</div> : <div>no courses</div>}
      )
    }
      
      </div>
  )
}

export default App;