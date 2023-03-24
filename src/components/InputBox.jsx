import React from 'react'

const InputBox = ({ state, handleChange, list }) => {
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
        />
      </div>
    </div>
  )
}

export default InputBox
