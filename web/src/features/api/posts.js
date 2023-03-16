
import axios from '../../libs/axios'

export const getPosts = (params) => axios.get('posts', { params })

