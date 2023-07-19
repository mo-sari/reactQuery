import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
export const SuperHeros = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error,setError] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch(Error=>{
      setError(Error.message);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}
