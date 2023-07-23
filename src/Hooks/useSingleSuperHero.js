import axios from "axios"
import { useQuery,useQueryClient } from "react-query"
const fetchSingleSuperHero = ({queryKey})=>{
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}
//using initialData 
//in rqsuperheros we fetched some data that we are using them also
// in singlesuperhero. in cases like this we can use those data 
//in another component to save some time 
//we are actually using the cashed data in this case
const useSingleSuperHero = (heroId)=>{
    const queryClient = useQueryClient();
    return useQuery(['super-hero',heroId],fetchSingleSuperHero,{
        initialData: ()=>{
            const hero = queryClient.getQueriesData('super-heros')
                ?.data?.find(hero=> hero.id === heroId);
            if (hero) {
                return {data:hero}
            }
            else{
                return undefined;
            }
        }
    })
}

export default useSingleSuperHero;
