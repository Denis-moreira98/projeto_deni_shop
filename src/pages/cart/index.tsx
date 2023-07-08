export function Cart() {
   return (
      <div className="w-full max-w-7xl mx-auto">
         <h1 className="font-bold font-bold text-center my-4">Meu carrinho</h1>

         <section className="flex items-center  justify-between border-b-2 border-gray-300">
            <img
               className="w-28 "
               src="https://images.tcdn.com.br/img/img_prod/1077127/celular_xiaomi_redmi_9a_2gb_ram_dual_32gb_6_53_glacial_blue_16753_1_78f5104e6e8985618a33cdb1f312550a.jpeg"
               alt="Foto celular"
            />
            <strong>Preço: R$: 1000,00</strong>

            <div className="flex items-center justify-center gap-3">
               <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                  -
               </button>
               1
               <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
                  +
               </button>
            </div>
            <strong className="float-right">Subtotal: R$ 1000,00</strong>
         </section>

         <p className="font-bold mt-4">Total: R$ 1000,00 </p>
      </div>
   );
}
