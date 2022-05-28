import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './CakeSlice'
const CakeView = () => {
    const { numOfCakes } = useSelector((state)=> state.cake)
    const dispatch = useDispatch()
  return (
    <>
    <h1> Number of cakes is: {numOfCakes}</h1>
    <button onClick={()=> dispatch(ordered()) } > Order Cake </button>
    <button onClick={()=> dispatch(restocked(1)) } > Restock Cake </button>
    </>
  )
}

export default CakeView