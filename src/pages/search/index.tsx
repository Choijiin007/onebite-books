import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState, useCallback } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";


// export const getStaticProps = async (context: GetStaticPropsContext) => {
// console.log("콘텍스트",context)
// const q = context.query.q;
// const books = await fetchBooks(q as string);

// return{
    
//     props:{
//         books,
//     },
// };
// }
export default function Page(){
    const[books, setBooks] = useState<BookData[]>([]);
    
    const router = useRouter();
    const q = router.query.q;

    const fetchSearchResult =  useCallback(async() =>{
        const data = await fetchBooks(q as string);
        setBooks(data);
    },[q])

    useEffect(() => {
        if(q){
            fetchSearchResult();
        }
    },[fetchSearchResult]);

   return(
   <div>
    {books.map((book)=>(<BookItem key={book.id} {...book} />

    ))}
   </div>
   )
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>

}