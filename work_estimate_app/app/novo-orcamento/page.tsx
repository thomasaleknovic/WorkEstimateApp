"use client"

import NewEstimateForm from "../_components/NewEstimateForm/NewEstimateForm";

export default function NovoOrcamento() {
   

    return (
      <main>
      <div className="bg-white text-black h-full flex flex-col items-center justify-center pt-10">
        <h1 className="font-bold text-[2rem]">Criar Novo Orçamento</h1>
        <div className="w-[70vw] max-w-[600px] mt-10">
        <NewEstimateForm />

        </div>
      </div>
      </main>
    );


}
