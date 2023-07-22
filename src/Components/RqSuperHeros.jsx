import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }
  const {isLoading,data,isError,error,isFetching,refetch} = useQuery('super-heros'
  ,fetchData,{
    //if you want the fetchign proccess to happen after specific
    //event there are two steps you must follow
    //1) you disable the fetchonmount 
    //2) get the refetch function from reactQuery and use it
    //wherever you want to that event to happen
    enabled:false
  })
  console.log(isLoading,isFetching);
  if (isLoading || isFetching) {
    //since the isLoading is not gone happen after first fetching 
    //(becuase of cashing) we can use isFetching to still show the
    //isLoading text to the user.
    return <h2>Loading ....</h2>
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <>
    <h2>RqSuperHeors</h2>
    <button onClick={refetch}>refetch here</button>
    {

      data?.data.map(hero=>{
        return <div key={hero.name} >{hero.name}</div>
      })
    }
    </>
  )
}
