import { error } from "console";

export default async function fetchRandomBooks(){
    const url = `http://localhost:12345/book/random`;

    try{
        const  response = await fetch(url);
        if(!response.ok){
            const err = new Error(); 
        }
        return response.json();
    }catch(err){
        console.error(err);
        
    }
}