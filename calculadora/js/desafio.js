console.log('LETS GOOOOOO')

var valorHora = document.querySelector('#valor-hora')
var horasProjeto = document.querySelector('#horas-projeto')
var resultado = document.querySelector('#resposta')
var dataPrazo = document.querySelector('#prazo-projeto')
var dataAtual = Date.now()
console.log ('data atual: '+dataAtual)

function calcular(){
    var valor = valorHora.valueAsNumber
    var horas = horasProjeto.value
    var resposta = valor*horas
    var dataPrazoMl = Date.parse(dataPrazo.value)
    console.log('prazo: '+dataPrazoMl)
    console.log(resposta)
    
    if (dataPrazoMl-dataAtual>604800000) {
        resultado.textContent = 'R$ ' +resposta+',00'
    }
    else  {
        resultado.textContent = 'Projeto inviável'
    }
}