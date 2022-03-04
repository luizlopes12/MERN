import {Container} from './styled'
import {useState, useEffect} from 'react'
import Item from './components/Item'
function App() {
  const [items, setItems] = useState([])
  const [filterItems, setFilterItems] = useState({filter: false, active: true})
  const getData = () =>{
    fetch('http://localhost:3000/todo/list', {method: "GET"})
    .then(response => response.json())
    .then(data => setItems(data))
  }
  useEffect(()=>{
    getData()
  },[])
  const itemsToShow = filterItems.filter ? items.filter(item => item.active == filterItems.active) : items
  const insertData = () =>{
    fetch('http://localhost:3000/todo/add', {
      method: "POST", 
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({"text": "", "active": true})
    })
    .then(response => response.json())
    .then(data => getData())
  }
  const updateData = (item) =>{
    fetch('http://localhost:3000/todo/update', {
      method: "PATCH", 
      headers: {'Content-type': "application/json"},
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(() => getData())
  }
  const deleteData = (item) =>{
    fetch('http://localhost:3000/todo/delete', {
      method: "DELETE", 
      headers: {'Content-type': "application/json"},
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(() => getData())
  }
  return (
    <Container>
        <h1>To do App</h1>
        {itemsToShow.map((item, key) => {
          return <Item key={key} item={item} updateData={updateData} deleteData={deleteData}/>
        })}
        <button onClick={() => setFilterItems({filter: false})}>Todos</button>
        <button onClick={() => setFilterItems({filter: true, active: true})}>Pendentes</button>
        <button  onClick={() => setFilterItems({filter: true, active: false})}>Concluidos</button>
        <button onClick={insertData}>Inserir novo to do</button>
    </Container>
  );
}

export default App;
