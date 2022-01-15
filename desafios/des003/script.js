function clicar() {
  var num = prompt('Digite um número inteiro qualquer')
  res = Number.parseInt(num)
  alert(
    `Antes de ${num}, temos o número ${
      res - 1
    }.\nDepois de ${num}, temos o número ${res + 1}.`
  )
}
