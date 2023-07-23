import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchUser = (id)=>{
    return axios.get(`http://localhost:4000/users/${id}`);
}
//reactQueries hook lets you to fetch several data at once 
//but there might be some cases where you must fetch the new
//data based on another fetchResults. in those cases we use
//dependentQueries. Here's how :
export const DependentQueriesPage = ({email}) => {
    const {data:user} = useQuery(['user',email],()=> fetchUser(email));
    const channelId = user?.data.channelId;
    const fetchCourses = CId =>{
        return axios.get(`http://localhost:4000/channels/${CId}`);
    }
    const {data:channels} = useQuery(['channels',channelId],()=>fetchCourses(channelId),{
        enabled: !!channelId,
    });
  return (
    <div>DependentQueriesPage</div>
  )
}
