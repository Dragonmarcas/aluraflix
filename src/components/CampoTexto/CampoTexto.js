import React from 'react'
import './CampoTexto.css'

const CampoTexto = ({label, placeholder, onChange, value}) => {
  return (
    <div className="form-group">
        <label>{label}</label>
        <input placeholder={placeholder} name={label} onChange={onChange} value={value}/>
    </div>
  )
}

export default CampoTexto