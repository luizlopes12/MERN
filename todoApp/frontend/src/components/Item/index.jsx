import React from 'react'

const Item = ({item}) => {
  return (
    <div>
        <input type='checkbox'/>
        <span>{item.text}</span>
        <button>Apagar</button>
    </div>
  )
}

export default Item