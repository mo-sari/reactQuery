import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
export const RqSuperHeros = () => {
  const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
  }
  const {isLoading,data,isError,error,isFetching} = useQuery('super-heros',fetchData,{
    //based on the value you provie to the below property
    //it fetches or doesn't fetch whenever you Mount to the page.
    //the default value is true for this property.
    refetchOnMount:false,
    //if you change the data in database the old axios way will not 
    //change the value on the windows until you reload the page and
    //do the fetching again, but the below property will make sure 
    //anytime your tab loses focus and regains that, a background
    //refetch will be done.
    //the default value is true for this property.
    //this will make sure your value on screen is in sync with the
    //actual data in database.
    refetchOnWindowFocus:true
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
