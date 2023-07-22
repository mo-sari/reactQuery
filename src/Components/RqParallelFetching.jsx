import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';
export const RqParallelFetching = () => {
    const {data:heros} = useQuery('super-heros',fetchSuperHeros);
    const {data:friends} = useQuery('friends',fetchFriends);
  return (
    <div>RqParallelFetching</div>
  )
}
//parallel querying in reactquery is as simple as
//using the uerQuery multiple times
const fetchSuperHeros = ()=>{
    return axios.get('http://localhost:4000/superheroes')
}
const fetchFriends = ()=>{
    return axios.get('http://localhost:4000/friends')
}