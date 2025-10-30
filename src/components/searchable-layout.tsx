import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "@/components/searchable-layout.module.css"
export default function SearchableLayout({children}:{children:ReactNode}){
    const router = useRouter();
    const [search, setSearch] = useState("");
   
    const q = router.query.q as string; //useEffect에서 오류 나서 타입 단언을 해줌.
console.log(q) 
    useEffect(() => {
setSearch(q || "")
    },[q])

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        if(!search || q === search) return; //없을 경우 또는 현재 서치바에 입력된 값과 q의 값이 같을 경우를 대비한 예외처리
        router.push(`/search?q=${search}`)

    }

    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
        onSubmit();
        }
       
    }


    return <div>
        <div className={style.searchbar_container}>
        <input type="text" value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요...."/>
        <button onClick={onSubmit}>검색</button>
        {/* 페이지 컴포넌트를 렌더링하기 위한 children */}
        {children}
        </div>
    </div>
}