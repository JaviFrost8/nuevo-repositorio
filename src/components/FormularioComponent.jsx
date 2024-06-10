import React, { useEffect, useRef, useState } from 'react'
import { calcularIMC } from '../utils/calcularIMC'
import { DatosComponent } from './DatosComponent'

export const FormularioComponent = () => {

    const [rango, setRango] = useState('')
    const [text, setText] = useState('')
    const [etiqueta, setEtiqueta] = useState('')

    const formulario = useRef()

    const calcularMasa = e => {
        e.preventDefault()

        const nombre = e.target.nombre.value
        const altura = e.target.altura.value
        const peso = parseFloat(e.target.peso.value)

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

    useEffect(() => {
        formulario.current.reset()

    }, [text])

    return (
        <div className='container-component'>
            <h2>Calcula tu indice de masa corporal</h2>

            <form ref={formulario} onSubmit={calcularMasa}>
                <label>Nombre:</label>
                <input type='text' name='nombre' placeholder='Introduce tu nombre...' />

                <label>Edad:</label>
                <input type='number' name='edad' min='1' max='100' placeholder='Introduce tu edad...' />

                <label>Altura:</label>
                <input type='number' name='altura' step='any' placeholder='Ej: 1,80' />

                <label>Peso:</label>
                <input type='number' name='peso' placeholder='Introduce tu peso...' />

                <input type='submit' value='Calcular' />
            </form>

            <DatosComponent text={text} etiqueta={etiqueta} rango={rango} />
        </div>
    )
}