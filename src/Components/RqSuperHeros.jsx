import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }

  //you want to know how to use these success and error functions in
  //useQuery configurations ? define state variables and change them based
  //on the result in these two functions
  //for example define a state value for polling and set it to 3000 
  // in reactQuery use that for refetchOnInterval and in onError set
  //the state value to false, that will stop reactQuery polling the data
  //on Intervals
  const onSuccess = (data)=>{
    console.log('perform the side effect after successfully fetching the data',data);
  }
  const onError = (error)=>{
    console.log('perform the side effect when the fetching failed',error);
  }
  const {isLoading,data,isError,error,isFetching,refetch} = useQuery('super-heros'
  ,fetchData,{
    onError,
    onSuccess:onSuccess
  })
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

      data?.data.map(hero=>{
        return <div key={hero.name} >{hero.name}</div>
      })
    }
    </>
  )
}
