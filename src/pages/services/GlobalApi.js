import axios from "axios";

const BASE_URL = 'https://openai-api-nodejs-8fa5642a8d8d.herokuapp.com/app'
// const BASE_URL = 'http://192.168.1.21:3001/app'   //Replace with System PC IP address

const getBardApi = (msg) => axios.get(BASE_URL + "?ques=" + msg)

export default {
    getBardApi
}