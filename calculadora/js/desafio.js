console.log('LETS GOOOOOO')

var valorHora = document.querySelector('#valor-hora')
var horasProjeto = document.querySelector('#horas-projeto')
var resultado = document.querySelector('#resposta')

function calcular(){
    var valor = valorHora.valueAsNumber
    var horas = horasProjeto.valueAsNumber
    var resposta = valor*horas
    console.log(resposta)
    if (true) {
        resultado.textContent = 'R$ ' +resposta+',00'
    }
    else  {
        resultado.textContent = 'Projeto inviável'
    }
}