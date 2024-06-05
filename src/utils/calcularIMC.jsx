export function calcularIMC(peso, altura){
    const imc = peso / (altura * altura)

    let rango 

    if(imc < 18.5){
        rango = 'bajo peso'

    }else if(imc >= 18.5 && imc <= 24.9){
        rango = 'normal'
        
    }else if(imc >= 25 && imc <= 29.9){
        rango = 'sobrepeso'
        
    }else{
        rango = 'obesidad'
    }

    return {imc, rango}
}