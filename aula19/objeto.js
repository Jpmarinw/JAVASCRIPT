let amigo = {nome: 'João Pedro', sexo: 'M', peso: 79.6,
    engordar(p=0){
    console.log('Engordou')
    this.peso += p
}, emagreceu(p=0){
    console.log('Emagreceu')
    this.peso -= p
}}

console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.emagreceu(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
