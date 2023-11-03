import axios from "axios"

const url : string = "https://twostepauthentication.onrender.com"
// const url2 : string = "http://localhost:5689"

export const createUser = async (data : any) =>{
    try {
        return await axios.post(`${url}/register`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const secretKey = async (token : any, data : any) =>{
    try {
        return await axios.post(`${url}/${token}/otp`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const verifyUser = async (token : any) =>{
    try {
        return await axios.post(`${url}/${token}/verify`).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const signUser = async (data : any) =>{
    try {
        return await axios.post(`${url}/sign`, data).then((res : any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}