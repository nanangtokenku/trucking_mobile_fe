import axios from '@/middleware'
import apiKey from '../modules/config'

const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

export function getUser ()
{
    
    return axios.get(`truck_user/detail/?id=1`, { headers: { 
        'x-api-key': apiKey,
        'x-token': localStorage.getItem('token')  
    } })
}
