import React from 'react'
import { useParams } from 'react-router'
import useSingleSuperHero from '../Hooks/useSingleSuperHero';

export const RqSuperHero = () => {
    const {id} = useParams();
    const {isLoading,isError,Error,isFetching,data} = useSingleSuperHero(id);
    if (isLoading) {
        return <div>the data is Loading</div>
    }
    if (isError) {
        return <div>{Error.message}</div>
    }
  return (
    <div>{data?.data.name}</div>
  )
}
