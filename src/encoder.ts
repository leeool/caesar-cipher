const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const removeSpecialChars = /[^A-Z\s-]/g

const encoder = (text: string, shift: number) => {
  const target = text
    .toUpperCase()
    .normalize("NFD")
    .replaceAll(removeSpecialChars, "")
    .split("")

  const result = target
    .map((char) => {
      const index = alphabet.indexOf(char)

      if (index === -1) return char
      else if (index + shift >= alphabet.length)
        return alphabet[(index + shift - alphabet.length) % alphabet.length]
      else return alphabet[index + shift]
    })
    .join("")

  return result
}

export default encoder
