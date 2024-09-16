import { h1 } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

const Excercises = () => {

const [data,setData]=useState(null);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response)=>response.json())
  .then((json)=>setData(json))
},[])
  return (
    <div>
      {data?
      <>
    <h1>{data.title}</h1>
    <h1>{data.id}</h1>   
    </>
    :
    `Loading`
    }
    </div>
  )
}

export default Excercises
