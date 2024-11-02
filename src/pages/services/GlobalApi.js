import axios from "axios";

const BASE_URL = 'https://nodejs-api-86f02c990620.herokuapp.com/app'
// const BASE_URL = 'http://192.168.1.21:3001/app'   //Replace with System PC IP address

const getBardApi = (msg) => axios.get(BASE_URL + "?ques=" + msg)

export default {
    getBardApi
}