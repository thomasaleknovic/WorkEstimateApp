"use client"

import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import NewEstimateForm from "../_components/NewEstimateForm/NewEstimateForm";

export default function NovoOrcamento() {
   
  useEffect(() => {

    const token = localStorage.getItem('bearerToken');

    if (!token) {
      console.error('Bearer token not found in localStorage');
      redirect('/login')
      } 
}, [])

    return (
      <main>
      <div className="bg-white text-black h-full flex flex-col items-center justify-center ">
        <div className="w-full h-[200px] bg-[#8AC903] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-white">Criar Novo Orçamento</h1>
        </div>
        <div className="w-[70vw] max-w-[600px] -mt-10">
        <NewEstimateForm />

        </div>
      </div>
      </main>
    );


}
