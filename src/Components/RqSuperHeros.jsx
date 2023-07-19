import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }
  //since react query caches the data after the first fetching
  //you can have a third argument for useQuery and specify how
  //long you want react query to use the cashed data.
  //the default time that react query saves the data is 5 minutes.
  const {isLoading,data,isError,error,isFetching} = useQuery('super-heros',fetchData,{
    cacheTime:5000
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
