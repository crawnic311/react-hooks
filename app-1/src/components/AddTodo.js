import React, { useState } from 'react'

const AddTodo = () => {
  const [userInput, setUserInput] = useState([])

  function logInput(e) {
    e.preventDefault()
    console.log(userInput)
  }

  return (
    <form onSubmit={logInput}>
      <input
        placeholder="Add Todo!"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  )
}

export default AddTodo
