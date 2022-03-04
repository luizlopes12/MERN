import {Container} from './styled'
import {useState, useEffect} from 'react'
import Item from './components/Item'
function App() {
  const [items, setItems] = useState([])

  const getData = () =>{
    fetch('http://localhost:3000/todo/list', {method: "GET"})
    .then(response => response.json())
    .then(data => setItems(data))
  }
  useEffect(()=>{
    getData()
  },[])

  const insertData = () =>{
    fetch('http://localhost:3000/todo/add', {
      method: "POST", 
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({"text": "", "active": true})
    })
    .then(response => response.json())
    .then(data => getData())
  }
  return (
    <Container>
        <h1>To do App</h1>
        {items.map((item, key) => {
          return <Item key={key} item={item}/>
        })}
        <button>Todos</button>
        <button>Pendentes</button>
        <button>Concluidos</button>
        <button onClick={insertData}>Inserir novo to do</button>
    </Container>
  );
}

export default App;
