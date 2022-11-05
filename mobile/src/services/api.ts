import axios from "axios"

export const api = axios.create({
    baseURL: 'http://192.168.42.194:3333'
})

// No adroid não funciona com localhost então o melhor e colocar o IP