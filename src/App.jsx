import { useState } from "react"
import React from "react"
import Hero from "./Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
      <Hero /> 
  )
}

export default App;
