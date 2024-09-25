const BASE_URL = process.env.REACT_APP_BASE_URL

export const sendNumber = async(name,email,message)=> {
    try {
        const response = await fetch(`${BASE_URL}/message`,{
            method:"POST",
            headers :{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,email,message})
        })
        if(!response.ok){
            throw new Error(`Error:${response.statusText}`)
        }
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
        return {status :500, message :"an error occure"}        
    }
}