import React, { useRef } from 'react'

export const FormularioComponent = ({onCalcularMasa}) => {

    const formulario = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        const nombre = e.target.nombre.value
        const altura = e.target.altura.value
        const peso = parseFloat(e.target.peso.value)

        onCalcularMasa({nombre, altura, peso})
    }

    return (
        <div className='container-component'>
            <h2>Calcula tu indice de masa corporal</h2>

            <form ref={formulario} onSubmit={handleSubmit}>
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
            
        </div>
    )
}