import React from 'react'

const FormInput = ({ name, type, errorInfo, handleFormChange }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} name={name} onChange={handleFormChange} />
      {errorInfo.errors?.[name] ? (
        <p className="error">{errorInfo.errors[name]}</p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormInput
