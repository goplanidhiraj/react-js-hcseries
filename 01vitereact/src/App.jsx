import Chai from "./chai"

function App() {
  //anotherUser = "Dhiraj Goplani" //this won't work with error anotherUser is not defined
  const anotherUser = "Dhiraj Goplani"
  return (
    <>
      Chai()
      <h3>React series for {anotherUser}</h3>
    </>

  )
}

export default App
