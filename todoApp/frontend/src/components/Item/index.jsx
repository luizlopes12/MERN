import React,{ useState } from 'react'

const Item = ({item, updateData, deleteData}) => {
  const [tempText, setTempText] = useState("")
  return (
    <div>
        <input type='checkbox' defaultChecked={!item.active} onClick={()=>(updateData({...item, active: !item.active}))}/>

        {((item.text === "") || (item.edit)) ? (
        <input 
        placeholder={item.text} 
        onChange={(e)=>setTempText(e.target.value)}
        onBlur={()=>{updateData({...item, text: tempText, edit: false})}}
        />
        )
        :
        <span 
        style={item.active? {}: {textDecoration: "line-through"}}
        onClick={()=> updateData({...item, edit: true})}>
        {item.text}
          
          </span>
        }

        <button onClick={()=> deleteData(item)}>Apagar</button>
    </div>
  )
}

export default Item