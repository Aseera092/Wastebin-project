import { SERVICE_URL } from "./service";


export const addUserAPI = async (data) => {
    const response = await fetch(`${SERVICE_URL}userLogin/register`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.json();
}

export const userLoginAPI = async (data) => {
    const response = await fetch(`${SERVICE_URL}userLogin/login`,{
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data)
    })
    return response.json();
}