import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }
  //with cashTime we just specify for how long we want react query
  //to store our data (isLoading is gone be false if we fatch again in
  //that time but isFetching is gona be true) but staleTime stops even
  //the Refetching that happens behind the scene.
  //the default value for staleTime is 0.
  const {isLoading,data,isError,error,isFetching} = useQuery('super-heros',fetchData,{
    cacheTime:5000,
    staleTime:20000
  })
  console.log(isLoading,isFetching);
  if (isLoading) {
    return <h2>Loading ....</h2>
  }
  if (isError) {
    return <div>{error.message}</div>
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
