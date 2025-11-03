//css Module
import { ReactNode } from "react"
import style from "./index.module.css"
import SearchableLayout from "@/components/searchable-layout"
import BookItem from "@/components/book-item"
import fetchBooks from "@/lib/fetch-books"
import fetchRandomBooks from "@/lib/fetch-random-books"
import { InferGetStaticPropsType } from "next"

//SSR로 내보내는 방법
export const getStaticProps = async() => {
  //컴포넌트 보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
//  console.log('난 서버사이드프롭스로 서버에서만 상주하지, 브라우저 콘솔에선 볼 수 없음')
console.log("인덱스 페이지")
const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()])
  return{
    props:{
      allBooks,
      recoBooks,
    },
};
};

export default function Home({allBooks, recoBooks}:InferGetStaticPropsType<typeof getStaticProps>) {
console.log(allBooks);
  return (
   <div className={style.container}>
    <section>
      <h3>지금 추천하는 도서</h3>
      {recoBooks.map((book)=><BookItem key={book.id} {...book}/>)}
    </section>
    <section>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book)=><BookItem key={book.id} {...book}/>)}
    </section>
   </div>
    
  )
}
Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
