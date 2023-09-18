import React from 'react'
import styled from 'styled-components'

export default function TestRejim() {
  return (
    <Wrapper>
        <h5>Sayt test rejimida ishlamoqda!</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 25px;
    width: 100%;
    background-color: red;
    text-align: center;
    position: sticky;
    z-index: 9999;
    top: 0;

    h5 {
        color: white;
        line-height: 25px;
    }
`
