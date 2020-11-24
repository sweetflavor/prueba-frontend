import { HTTP } from './http-common';
const getPosts = () => {
    return HTTP.get(`post?limit=10`)
        .then(response => {
            return response.data.data
        })
        .catch(e => {
            this.errors.push(e)
        })
}

export default getPosts