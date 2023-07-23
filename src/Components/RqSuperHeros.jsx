import React, { useState } from 'react'
import useSuperHerosData  from "../Hooks/useSuperHerosData"
import { Link } from 'react-router-dom';
import {usePostSuperHero} from "../Hooks/useSuperHerosData";
export const RqSuperHeros = () => {
  const [name,setName] = useState('');
  const [alterEgo,setAlterEgo] = useState('');

  const onSuccess = (data) =>{
    console.log(data);
  }
  const onError = (error) =>{
    console.log(error);
  }
  const {data,isError,isLoading,isFetching,refetch} = useSuperHerosData(onSuccess,onError);
  const {mutate:addHero} = usePostSuperHero();
  const handlePostRequest = ()=>{
    const newHero = {
      name,
      alterEgo
    }
    addHero(newHero);
    setAlterEgo('');
    setName('');
  }
  if (isLoading || isFetching) {
    return <h2>Loading ....</h2>
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <>
    <h2>RqSuperHeors</h2>
    <div>
    <input type="text" 
      name="name" id=""
      value={name}
      onChange={(e)=>setName(e.target.value)} />
    <input type="text" 
      name="alterego" id=""
      value={alterEgo}
      onChange={(e)=>setAlterEgo(e.target.value)} />
      <button onClick={handlePostRequest}>click to add</button>
    </div>
    <button >refetch here</button>
    {
      data?.data.map(hero=>{
        return <div key={hero.id} >
          <Link to={`/rqsuperheros/${hero.id}`} >{hero.name}</Link>
        </div>
      })
      // data.map(Hero=>{
      //   return <div key={Hero}>{Hero}</div>
      // })
    }
    </>
  )
}
