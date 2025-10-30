import SearchableLayout from "@/components/searchable-layout";
import { useRouter} from "next/router"
import { ReactNode } from "react";



export default function Page(){
    const router = useRouter();
    
    console.log(router) //router 객체 (back, push, query 등등)

    const { q } = router.query;

    return <h1>Search 쿼리스트링:{q}</h1>
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>

}