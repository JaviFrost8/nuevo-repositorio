import React, {useState} from 'react'
import { calcularIMC } from '../utils/calcularIMC'
import { FormularioComponent } from './FormularioComponent'
import { DatosComponent } from './DatosComponent'

export const PadreComponent = () => {

    const [rango, setRango] = useState('')
    const [text, setText] = useState('')
    const [etiqueta, setEtiqueta] = useState('')

    const handleCalcularMasa = ({nombre, altura, peso}) => {

        const {imc, rango} = calcularIMC(peso, altura)

        const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre);

        if (!nombre || isNaN(altura) || isNaN(peso)) {
            setText(<strong>Por favor, introduzca datos válidos</strong>);
            setRango('');
            return;

        } else if (!nombreValido) {
            setText(<strong>El nombre no puede contener dígitos numéricos</strong>);
            setRango('');
            return;
        }
        
        setText(<p>¡Hola <strong className='red'>{nombre}</strong>! Tu índice de masa corporal es de: <strong className='red'>{imc}</strong></p>)
        setEtiqueta('Tu IMC indica que tienes: ')
        setRango(rango)
    } 

  return (
    <div>
        <FormularioComponent onCalcularMasa={handleCalcularMasa} />
        <DatosComponent text={text} etiqueta={etiqueta} rango={rango} />
    </div>
  )
}
