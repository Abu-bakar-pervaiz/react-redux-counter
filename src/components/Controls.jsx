import React from 'react'
import { useDispatch } from 'react-redux'

function Controls() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({
      type:"INCREMENT",
    })
  }
  const handleDecrement = () => {
    dispatch({
      type:"DECREMENT",
    })
  }
  return (
    <div className="d-flex gap-2 justify-content-center mb-5 mt-3">
      <button onClick={handleIncrement} className="btn btn-primary px-4">+1</button>
      <button onClick={handleDecrement} className="btn btn-secondary px-4">-1</button>
    </div>
  )
}

export default Controls