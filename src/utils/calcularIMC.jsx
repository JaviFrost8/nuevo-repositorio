export function calcularIMC(peso, altura){
    const calculo = peso / (altura * altura)

    const imc = calculo.toFixed(2)

    let rango 

    if(imc < 18.5){
        rango = 'Bajo peso'

    }else if(imc >= 18.5 && imc <= 24.9){
        rango = 'Peso normal'
        
    }else if(imc >= 25 && imc <= 29.9){
        rango = 'Sobrepeso'
        
    }else{
        rango = 'Obesidad'
    }

    return {imc, rango}
}