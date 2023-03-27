import React from 'react'

const InputBox = ({ state, handleChange, onBlur, list }) => {
  return (
    <div className="mb-4 -mt-2">
      <label className="input-label">{list.lable}</label>
      <div className="relative">
        <input
          type={list.type}
          placeholder={list.placeholder}
          name={list.name}
          className="input-box"
          value={state[`${list.name}`]}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {(list.name === state.errorFor) && state.touched && (
          <span className="text-meta-1">{list.errorMessage}</span>
        )}
      </div>
    </div>
  )
}

export default InputBox
