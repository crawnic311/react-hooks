import React, { useState } from 'react'
import List from './components/List.js'
//import Todo from './components/Todo.js'
import AddTodo from './components/AddTodo.js'

function App() {
  const [todoList, setTodoList] = useState([])

  function handleAdd(listItem) {
    const newList = [...todoList, listItem]
    setTodoList(newList)
  }

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <List list={todoList} />
    </div>
  )
}

export default App
