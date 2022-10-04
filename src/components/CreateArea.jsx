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

const Input = styled.input`
  width: 50%;
  border: solid 0.5px;
  padding: 1px;
  height: 36px;

`
const Button = styled.button`
  position: relative;
  float: right;
  margin-right: 5px;
  color: black;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  
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
        <Input
          name = "listItem"
          onChange={(e) => setTodoItem(e.target.value)}
          onClick={() => setActive(false)}
          value={todoItem}
        />
        <Button disabled={active} onClick={handleClick}>Add</Button>
      </Wrapper>

    </Container>
  )
}

export default CreateArea