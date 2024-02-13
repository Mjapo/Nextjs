import { useRouter } from 'next/router';


export default function Categoria() {

   const route =  useRouter()
   const {idCategoria} = route.query

    return (
   <div>
    <h1>categoria</h1>
   </div>
    );
    }
  