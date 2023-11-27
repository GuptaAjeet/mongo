import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([{name:"ajeet"}, {name:"sujeet"}, {name:"vikas"}, {name:"raj"}, {name:"dilip"}])

  useEffect(()=>{
    fetch("http://127.0.0.1:4000/api/users")
      .then((data)=>data.json())
      .then((data)=>{
        setList(data);
      })
  }, [])

  return (
    <>
      <ul>
        {list.map((item, index)=><li key={index}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default App
