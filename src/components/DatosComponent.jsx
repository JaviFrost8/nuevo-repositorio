import React from 'react'

export const DatosComponent = ({text, etiqueta, rango}) => {
  return (
    <div className='datos'>
        {text}
        {etiqueta}<strong className='rango'>{rango}</strong>
    </div>
  )
}
