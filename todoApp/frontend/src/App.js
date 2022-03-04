import {Container} from './styled'
import {useState} from 'react'
import Item from './components/Item'
function App() {
  const [items, setItems] = useState([
      {
          "_id": "62223d33b74a547d60402803",
          "texto": "texto opa",
          "text": "teste 1",
          "active": true,
          "edit": false
      },
      {
          "_id": "622254b45a91bf215feee9ce",
          "text": "teste 2",
          "active": false,
          "edit": false
      }
  ])

  const getData = () =>{
    
  }

  return (
    <Container>
        <h1>To do App</h1>
        {items.map(item => {
          return <Item item={item}/>
        })}
        <button>Todos</button>
        <button>Pendentes</button>
        <button>Concluidos</button>
        <button>Inserir novo to do</button>
    </Container>
  );
}

export default App;
