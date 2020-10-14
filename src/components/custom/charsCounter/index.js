import React from 'react'

const CharsCounter = (props) => {
  const { maxLength, values } = props
  return (
    <>
      {
        maxLength ? maxLength > values.length ? <p className="font-size-small">{maxLength - values.length} carácteres restantes</p> : <p className="text-sm-left">Máximo de caracteres alcanzado</p> : null
      }
    </>
  )
}

export default CharsCounter
