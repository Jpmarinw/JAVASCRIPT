function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro, verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'fizzcrianca.jpg')
            }else if (idade >=12 && idade < 21){
                img.setAttribute('src', 'fizzjovem.jpg')
            }else{
                img.setAttribute('src', 'fizzadulto.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'fizzcrianca.jpg')
            }else if (idade >=12 && idade < 21){
                img.setAttribute('src', 'fizzjovem.jpg')
            }else{
                img.setAttribute('src', 'fizzadulto.jpg')
            }
        }
    }
    res.innerHTML = `Detectamos: ${genero} com idade: ${idade} anos`
    res.appendChild(img)
}
