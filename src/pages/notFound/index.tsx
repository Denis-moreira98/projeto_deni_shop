import { Link } from "react-router-dom";

export function NotFound() {
   return (
      <div className="flex w-full justify-center  min-h-screen items-center flex-col">
         <h1 className="font-bold text-6xl mb-2">Erro 404</h1>
         <h1 className="font-medium text-4xl mb-4">Página não encontrada...</h1>
         <Link
            className="bg-black py-1 px-4 rounded-md font-medium text-white"
            to="/"
         >
            Voltar para Home
         </Link>
      </div>
   );
}
