import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

export function getUser ()
{
    
    return axios.get(`truck_user/detail/?id=1`, { headers: { 
        'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676',
        'x-token': localStorage.getItem('token')  
    } })
}
