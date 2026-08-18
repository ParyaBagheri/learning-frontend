import List from './List.jsx'

function App() {
  return (
    <>
      <List tasks={
        [{name:"task 1"},
         {name:"task 2", state:"completed"},
         {name:"task 3"},
         {name:"task 4"},
        ]
      }></List>
    
    </>
  )

}
export default App
