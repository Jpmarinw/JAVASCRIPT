function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if (hora >=0 && hora < 12){
        //Bom dia
        img.src = 'yonemanha.jpg'
        document.body.style.background = 'blue'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'yonetarde.jpg'
        document.body.style.background = 'orange'
    } else {
        //Boa noite
        img.src = 'yonenoite.jpeg'
        document.body.style.background = 'black'
    }
}
