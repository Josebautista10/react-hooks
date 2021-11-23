// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting(props) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(props.initialName)

  function handleChange(event) {
    const value = event.target.value
    setName(value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        {/* Set the value to name so user can still type */}
        <input onChange={handleChange} id="name" value={name}/>
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  // let greeting accept a prop so we can display it right away and use it for state
  return <Greeting initialName={""}/>
}

export default App
