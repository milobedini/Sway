import React from 'react'

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      id={props.name}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show</span>
      <span>{props.name}</span>
      <span className="visually-hidden">meditations</span>
    </button>
  )
}

export default FilterButton
