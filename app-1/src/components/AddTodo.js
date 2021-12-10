import React, { useState } from 'react'

const AddTodo = (props) => {
  const [item, setItem] = useState([])

  function handleItemAdd(e) {
    e.preventDefault()
    props.handleAdd(item)
    setItem('')
  }

  return (
    <form onSubmit={handleItemAdd}>
      <input
        placeholder="Add todo!"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  )
}
export default AddTodo
