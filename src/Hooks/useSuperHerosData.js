import {useMutation, useQuery,useQueryClient} from 'react-query';
import axios from 'axios';
//this custome hook we can use wherever we want without
//having to duplicate the code
const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
}
const postData = (hero)=>{
    return axios.post('http://localhost:4000/superheroes',hero);
}
const useSuperHerosData =(onSuccess,onError)=>{
    return useQuery('super-heros'
    ,fetchData,{ 
    onSuccess,
    onError,
    
    })
}
export default useSuperHerosData;
export const usePostSuperHero = ()=>{
    //before we had to refetch to see the added value
    //but with query invalidation we can have that automatically
    const queryClient = useQueryClient();
    return useMutation(postData,{
        onSuccess:()=>{
            queryClient.invalidateQueries('super-heros');
        }
    });
}
