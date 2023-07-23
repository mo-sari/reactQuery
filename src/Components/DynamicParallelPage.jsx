import axios from 'axios'
import React from 'react'
import {useQueries} from 'react-query';
const fetchSuperHero = (heroId)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);

}
//the benefit of parallel query is that you fetch several data
//once that increases the efficiency
export const DynamicParallelPage = ({heroIds}) => {
    const queryResults = useQueries(
        heroIds.map(id=>{
            return {
                queryKey:['super-hero',id],
                queryFn: ()=>fetchSuperHero(id)
            }
        })

    )
  return (
    <div>DynamicParallelPage</div>
  )
}
