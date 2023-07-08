import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

export function Header() {
   const { cartAmount } = useContext(CartContext);

   return (
      <header className="h-full px-1 bg-slate-200">
         <nav className="w-full max-w-7xl px-5 mx-auto h-14 flex items-center justify-between">
            <Link className="font-bold" to="/">
               <h1 className="mt-6 text-black mb-7 font-bold text-4xl">
                  Deni
                  <span className="bg-gradient-to-r from-sky-500 to-purple-800 bg-clip-text text-transparent">
                     Shop
                  </span>
               </h1>
            </Link>

            <Link className="relative" to="/cart">
               <FiShoppingCart size={24} color="#121212" />
               {cartAmount > 0 && (
                  <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                     {cartAmount}
                  </span>
               )}
            </Link>
         </nav>
      </header>
   );
}
