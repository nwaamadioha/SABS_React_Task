import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Item = styled.p`
`


const List = (props) => {
  return (
    <Container>
      <input type='checkbox'/>
      <Item>{props.todoItem}</Item>
    </Container>
  )
}

export default List