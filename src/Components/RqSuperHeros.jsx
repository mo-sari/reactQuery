import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }

  
  const {isLoading,data,isError,error,isFetching,refetch} = useQuery('super-heros'
  ,fetchData,{
    //this code below changes our data to just an array of names
    //before: our data was the entire array of SuperHeros
    //after: we changed the data to an array of only name of heros
    //this is called data transformation.
    //we can also use filter method to filter the data 
    select:(data)=>{
      const heroNames = data.data.map(h=>{
        return h.name;
      })
      return heroNames;
    }
  })
  console.log(data);
  if (isLoading || isFetching) {
    return <h2>Loading ....</h2>
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <>
    <h2>RqSuperHeors</h2>
    <button >refetch here</button>
    {

      // data?.data.map(hero=>{
      //   return <div key={hero.name} >{hero.name}</div>
      // })
      data.map(Hero=>{
        return <div key={Hero}>{Hero}</div>
      })
    }
    </>
  )
}
