import React from 'react'
import useSuperHerosData  from "../Hooks/useSuperHerosData"
export const RqSuperHeros = () => {
  
  const onSuccess = (data) =>{
    console.log(data);
  }
  const onError = (error) =>{
    console.log(error);
  }
  const {data,isError,isLoading,isFetching,refetch} = useSuperHerosData(onSuccess,onError);
  
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
