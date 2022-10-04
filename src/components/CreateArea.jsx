import React, {useState} from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const Wrapper = styled.div`
  justify-content: space-between;

`
const CreateArea = (props) => {
    const [todoItem, setTodoItem] = useState("")
    const [active, setActive] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        props.onAdd(todoItem)
        setTodoItem("")
    }

    
  return (
    <Container>
      <Wrapper>
        <input
          name = "listItem"
          onChange={(e) => setTodoItem(e.target.value)}
          onClick={() => setActive(false)}
          value={todoItem}
        />
        <button disabled={active} onClick={handleClick}>Add</button>
      </Wrapper>

    </Container>
  )
}

export default CreateArea