import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }
  const {isLoading,data,isError,error,isFetching} = useQuery('super-heros'
  ,fetchData,{
    //the first property below makes your component refetch 
    //in an specific period of time without user doing anything
    //the default value for this property is false but you can
    //set a number 
    //first property doesn't work when the web page loses focus
    //but using the second property you can make sure the refecthing
    //on intervals is happending even when the page loses focus
    //you would use these properties when your data changes every now and then
    refetchInterval:4000,
    refetchIntervalInBackground:true
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
