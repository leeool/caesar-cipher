import React from "react"

const useForm = (mode?: "numeric" | null) => {
  const [value, setValue] = React.useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (mode === "numeric") {
      if (isNaN(Number(event.target.value))) return
      else setValue(event.target.value)
    }
    setValue(event.target.value)
  }

  return { onChange, value }
}

export default useForm
