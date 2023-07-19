import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  //useQuery accepts at least two arguments which
  //the first one is the id for the query and the
  //second one is a function that returns a promise
  const {isLoading,data} = useQuery('super-heros',()=>{
    return axios.get('http://localhost:4000/superheroes');
  })
  if (isLoading) {
    return <h2>Loading ....</h2>
  }
  return (
    <>
    <h2>RqSuperHeors</h2>
    {
      data?.data.map(hero=>{
        return <div key={hero.name} >{hero.name}</div>
      })
    }
    </>
  )
}
