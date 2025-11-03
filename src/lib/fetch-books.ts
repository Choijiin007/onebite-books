import { BookData } from "@/types";
// 비동기함수니까 반환값 타입은 Promise이고 여러개의 배열로 반환할 거니까 array타입
export default async function fetchBooks(q?:string): Promise<BookData[]>{
    let url = `http://localhost:12345/book`;
    if(q){
        url+=`/search?q=${q}`
    }
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }
        return await response.json();
    }catch(err){
        console.error(err);
        return [];
        
    }
}