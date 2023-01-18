import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

export function getUser ()
{
    
    return axios.get(`truck_user/detail/?id=1`, { headers: { 
        'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676',
        'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMzE5OCJ9LCJpYXQiOjE2NzQwMTI0MzIsImV4cCI6MTY3NDA5ODgzMn0.UfLWmutuCuez50BigqbzWHpv3K-4rP22nTyL-hQfAIs'  
    } })
}
