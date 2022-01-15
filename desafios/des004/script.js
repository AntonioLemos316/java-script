function clicar() {
  var prod = prompt('Que produto você está comprando?')
  var prec = prompt(`Quanto custa ${prod} que você está comprando?`)
  var din = prompt(`Qual foi o valor que você deu para pagar ${prod}?`)
  var troco = alert(
    `Você comprou ${prod} que custou R$${prec}.\nDeu R$${din} em dinheiro e vai receber R$${Number(
      din - prec
    )} de troco.\nVolte Sempre!`
  )
}
