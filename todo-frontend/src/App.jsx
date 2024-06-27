import { useState } from 'react'

import './App.css'
import { Customtodo } from './components/customtodo.jsx'
import { Todo } from './components/todos.jsx'





function App() {
  const[todos,settodos]=useState({});

  fetch("http://localhost:3000/todos")
  .then(async function(res){
   const json=await res.json();
   settodos(json.todos);
  })

  return (
    <div>
      <Customtodo/>
      <Todo todos={[]}></Todo>
    </div>
      
    
  )
}

export default App
