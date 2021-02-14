import axios from 'axios'
export const userapi = () => {
    return axios.get("http://jsonplaceholder.typicode.com/users")
}