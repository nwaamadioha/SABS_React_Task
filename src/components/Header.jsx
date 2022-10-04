import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  border: solid 1px;
`

const Title = styled.h1`
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <Title>
        React Task
      </Title>
    </Container>
  )
}

export default Header