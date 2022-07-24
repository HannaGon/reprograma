console.log('bora galere')
var inputSalario = document.querySelector('#ganho-mes')
var inputHora = document.querySelector('#horas-dia')
var saida = document.querySelector('#resposta')

function calcularValorHora(){
var salario = inputSalario.valueAsNumber
var horas = inputHora.valueAsNumber
var horasMes = horas*22
var valorHora = salario/horasMes
var valorDuasCasas=valorHora.toFixed(2)
console.log('Resposta: '+valorDuasCasas)

saida.textContent = 'R$ '+valorDuasCasas
}
