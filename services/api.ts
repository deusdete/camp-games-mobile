import axios from 'axios'

const api = axios.create({
    baseURL: 'https://camp-games-api.herokuapp.com'
})

export default api