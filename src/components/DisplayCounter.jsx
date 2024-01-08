import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
  const counter = useSelector( store => store.counter)
  return (
    <div>
      Value : {counter}
    </div>
  )
}

export default DisplayCounter