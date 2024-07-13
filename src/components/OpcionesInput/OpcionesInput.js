import React from 'react'

const OpcionesInput = ({listOptions, label, onChange, value}) => {
  return (
    <div className='form-group'>
        <label>{label}</label>
        <select name={label} onChange={onChange} value={value}>
            {listOptions.map((element, index) => {
                return <option key={index}>{element}</option>
            })}
        </select>
    </div>
  )
}

export default OpcionesInput