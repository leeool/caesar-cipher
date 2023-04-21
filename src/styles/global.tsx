import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #282c34;
    font-family: 'Outfit', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    color: #fff;
  }

  h1 {
    font-size: 3rem;
  }

  input {
    all: unset;
  }
`

export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  padding: 0 0.5rem;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 8rem;
  gap: 1rem;
  width: 100%;
  max-width: 40rem;
`

export const Input = styled.input`
  padding: 1rem 0.5rem;
  background-color: #1f2228;
  height: 1.8rem;
  min-width: 3rem;

  &:hover,
  &:focus {
    background-color: #2f333d;
  }

  &::placeholder {
    font-size: 1rem;
  }
`

export const NumericInput = styled(Input)`
  font-size: 2rem;
`

export const Button = styled.button`
  padding: 1rem;
  background-color: #1f2228;
  cursor: pointer;
  font-size: 1.2rem;
  grid-column: 1 / -1;
  justify-self: center;
  width: 100%;

  &:hover {
    background-color: #2f333d;
  }
`

export const Result = styled.div`
  font-size: 2rem;
  max-width: 50rem;
  text-align: center;
`
