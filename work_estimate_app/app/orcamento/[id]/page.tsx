"use client"

import JobDetailsComponent from "@/app/_components/Orcamento/JobDetailsComponent";
import OrcamentoInfo from "@/app/_components/Orcamento/OrcamentoInfo";
import { Orcamentos } from "@/app/meus-orcamentos/page";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { redirect } from 'next/navigation'





export default function Orcamento() {

 
 
    const params = useParams<{ id: string }>()
    const [orcamento, setOrcamento] = useState<Orcamentos>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        const token = localStorage.getItem('bearerToken');

        if (token) {
            fetch(`https://workestimate.azurewebsites.net/api/estimate/${params.id}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            })
              .then((res) => {
                if (!res.ok) {
                  console.error('Requisição não autorizada.', res.status);
                  throw new Error('Requisição não autorizada.');
                }
                return res.json();
              })
              .then((data) => {
                setOrcamento(data)
                setIsLoading(false)
              })
              .catch((error) => {
                console.error('An error occurred during the fetch:', error);
                redirect('/login')

              });
          } else {
            console.error('Bearer token not found in localStorage');
            redirect('/login')
          }
    }, [])
    


    if (isLoading) return <div className="w-screen h-[30vw] flex justify-center items-center">
        <h1 className="text-center font-bold text-xl">Carregando informações...</h1>
        </div>
    if (!orcamento) return <p>No profile data</p>

    return (
        <main>
            <div>
                {
                    !isLoading ? <div className="flex flex-row justify-center gap-20 flex-wrap mt-20 pb-[10vw]">
                        <div className="lg:w-[30vw] w-[50vw]">
                            <OrcamentoInfo data={orcamento} />
                            
                        <a target="_blank" href={`https://workestimate.azurewebsites.net/api/estimate/${params.id}/download`}><Button variant="contained" className='mt-4 !bg-[#1976d2] w-full' >Baixar orçamento</Button></a>
                        </div>
                        <div>
                            <JobDetailsComponent data={orcamento.jobDetails} estimateId={orcamento.estimateId} />
                        </div>
                    </div> : <div></div>
                }
            </div>
        </main>
    );
}




