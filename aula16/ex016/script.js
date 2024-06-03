function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //verifica se passo é zero
        if (p <= 0){
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        //contagem crescente
        if (i < f){
            for (let cont = i; cont <= f; cont += p){
                res.innerHTML += ` ${cont} \u{1f449}`
            }
        //contagem decrescente
        }else{
            for (let cont = i; cont >= f; cont -= p){
                res.innerHTML += ` ${cont} \u{1f449}`
            } 
        }
        res.innerHTML += ' \u{1f3c1}'
    }
}
