import axios from "axios"
import { useQuery } from "react-query"
const fetchSingleSuperHero = ({queryKey})=>{
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}
const useSingleSuperHero = (heroId)=>{
    //here we mentioned heroId in the queryKey array because
    //if we don't do that the cashing will not allow us to get
    //the superhero based on id, it will just give us the same
    //result because the url and querykey haven't changed .
    return useQuery(['super-hero',heroId],fetchSingleSuperHero)
}

export default useSingleSuperHero;

//this below is the easier way to do it
//but above is the more common way
// const fetchSingleSuperHero = (id)=>{
//     return axios.get(`http://localhost:4000/superheroes/${id}`)
// }
// const useSingleSuperHero = (heroId)=>{

//     return useQuery(['super-hero',heroId],()=> fetchSingleSuperHero(heroId))
// }
