import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import CartProvider from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <CartProvider>
         <RouterProvider router={router} />
      </CartProvider>
   </React.StrictMode>
);
