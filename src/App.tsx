import React from "react"
import useForm from "./useForm"
import encoder from "./encoder"
import {
  Button,
  Container,
  Form,
  Input,
  NumericInput,
  Result
} from "./styles/global"

const App = () => {
  const [result, setResult] = React.useState("")
  const input = useForm()
  const shift = useForm("numeric")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.value || !shift.value) return alert("Preencha todos os campos")
    setResult(encoder(input.value, Number(shift.value)))
  }

  return (
    <Container>
      <h1>Cifra de César</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="criptografar..." {...input} />
        <NumericInput
          type="text"
          placeholder="casas..."
          min={0}
          inputMode="numeric"
          {...shift}
        />
        <Button>Encriptar</Button>
      </Form>
      <Result>{result}</Result>
    </Container>
  )
}

export default App
