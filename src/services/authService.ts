import { IAuthCredentials } from "../interfaces/auth";

export const login = async ({email, password}:IAuthCredentials):Promise<any> => {
    try {

        const responseStream = await fetch('',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })
        })

        const result = responseStream.json()

        return result;
        
    } catch (error:any) {
        return null;
    }
}