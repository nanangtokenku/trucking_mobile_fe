import axios from '@/middleware'
const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

const res = 'truck_menu/all'
export function getTransactions ()
{
    //return axios.get(res, { headers: { Authorization: `Bearer ${user}` } })
    return axios.get(res, { headers: { 
        'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676',
        'x-token': localStorage.getItem('token')
    } })
}

export function createTransaction (data)
{
    return axios.post(res, { data: data }, { headers: { Authorization: `Bearer ${user}` } })
    //return axios.post(res, { data: data }, { 'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676' } })
}