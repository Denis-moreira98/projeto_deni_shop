import { BsCartPlus } from "react-icons/bs";

export function Home() {
   return (
      <div>
         <main className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
               Produtos em alta
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
               <section className="w-full">
                  <img
                     className="w-full rounded-lg max-h-70 mb-b"
                     src="https://images.tcdn.com.br/img/img_prod/1077127/celular_xiaomi_redmi_9a_2gb_ram_dual_32gb_6_53_glacial_blue_16753_1_78f5104e6e8985618a33cdb1f312550a.jpeg"
                     alt="celular xiaomi"
                  />
                  <p className="font-medium mt-1 mb-2  ">Celular</p>
                  <div className="flex gap-3 items-center">
                     <strong className="text-zinc-700/90">R$ 1000,00</strong>
                     <button className="bg-zinc-900 p-1 rounded">
                        <BsCartPlus size={28} color="#fff" />
                     </button>
                  </div>
               </section>
            </div>
         </main>
      </div>
   );
}
