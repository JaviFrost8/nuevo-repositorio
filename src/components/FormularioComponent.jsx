import React, { useEffect, useRef, useState } from 'react'
import { calcularIMC } from '../utils/calcularIMC'

export const FormularioComponent = () => {
    const [rango, setRango] = useState('')
    const [text, setText] = useState('')
    const [imc, setImc] = useState('')
    const [nombre, setNombre] = useState('')

    const formulario = useRef()

    const calcularMasa = e => {
        e.preventDefault()

        const nombre = e.target.nombre.value
        const altura = e.target.altura.value
        const peso = parseFloat(e.target.peso.value)

        const {imc: imcCalculado, rango} = calcularIMC(peso, altura)

        setImc(imcCalculado)
        setNombre(nombre)
        setText(<p>¡Hola <strong className='red'>{nombre}</strong>! Tu índice de masa corporal es de: <strong className='red'>{imcCalculado}</strong></p>)
        setRango(rango)

    }

    useEffect(() => {
        formulario.current.reset()

    }, [text])

    return (
        <div className='container-component'>
            <h2>Calcula tu indice de masa corporal</h2>

            <form ref={formulario} onSubmit={calcularMasa}>
                <input type='text' name='nombre' placeholder='Nombre' />
                <input type='number' name='edad' placeholder='Edad' />
                <input type='number' name='altura' step='any' placeholder='Altura Ej: 1,80'/>
                <input type='number' name='peso' placeholder='Peso en kg' />

                <input type='submit' value='Calcular' />
            </form>

                <div className='datos'>
                    {text}
                    <strong className='rango'>{rango}</strong>
                </div>
        </div>
    )
}