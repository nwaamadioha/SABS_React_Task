import React, {useState} from 'react'
import Header from "./Header"
import List from './List'
import CreateArea from './CreateArea'

export const App = () => {

  const [lists, setLists] = useState(['Call Father', 'Buy Milk'])

  const addList = (newItem) => {
    setLists(prevItems => {
      return [...prevItems, newItem]
    })
  }
  return (
    <div>
      <Header />
      
     
      {lists.map((listItem, index) => {
        return (
          <List 
            key={index}
            todoItem={listItem}
          />
        )
      })}
      <CreateArea onAdd={addList}/>
    </div>
  )
}
