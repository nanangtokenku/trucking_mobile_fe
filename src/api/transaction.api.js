import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

const res = 'truck_menu/all'
export function getTransactions ()
{
    //return axios.get(res, { headers: { Authorization: `Bearer ${user}` } })
    return axios.get(res, { headers: { 
        'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676',
        'x-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMzE5OCJ9LCJpYXQiOjE2NzQwMTI0MzIsImV4cCI6MTY3NDA5ODgzMn0.UfLWmutuCuez50BigqbzWHpv3K-4rP22nTyL-hQfAIs' 
    } })
}

export function createTransaction (data)
{
    return axios.post(res, { data: data }, { headers: { Authorization: `Bearer ${user}` } })
    //return axios.post(res, { data: data }, { 'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676' } })
}