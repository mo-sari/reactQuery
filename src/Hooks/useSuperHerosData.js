import {useQuery} from 'react-query';
import axios from 'axios';
//this custome hook we can use wherever we want without
//having to duplicate the code
const fetchData = ()=>{
    return axios.get('http://localhost:4000/superheroes');
}

const useSuperHerosData =(onSuccess,onError)=>{
    return useQuery('super-heros'
    ,fetchData,{ 
    onSuccess,
    onError,
    select:(data)=>{
        const heroNames = data.data.map(h=>{
        return h.name;
        })
        return heroNames;
    }
    })
}
export default useSuperHerosData;