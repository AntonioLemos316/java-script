function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = 19
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'amanhecer.png'
    document.body.style.background = '#fff3bf'
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'entardecer.png'
    document.body.style.background = '#d97858'
  } else {
    // BOA NOITE!
    img.src = 'anoitecer.png'
    document.body.style.background = '#223543'
  }
}
