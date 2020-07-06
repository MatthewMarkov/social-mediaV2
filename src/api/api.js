const axios = require('axios').default
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5695b80a-0241-44c0-8ae2-e291419df2a1',
    },
})

