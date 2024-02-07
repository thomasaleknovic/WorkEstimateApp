"use client"

import JobDetailsComponent from "@/app/_components/Orcamento/JobDetailsComponent";
import OrcamentoInfo from "@/app/_components/Orcamento/OrcamentoInfo";
import { Orcamentos } from "@/app/meus-orcamentos/page";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';




export default function Orcamento() {

    // type Orcamentos1 = {
    //     estimateId: string,
    //     estimateNumber: string,
    //     estimateName: string,
    //     customerName: string,
    //     cpf: string,
    //     address: string,
    //     createdAt: string,
    //     totalPrice: string,
    //     jobDetails: [
    //         {
    //         id: string,
    //         title: string,
    //         description: string,
    //         price: number
    //         },
    //         {
    //         id: string,
    //         title: string,
    //         description: string,
    //         price: number
    //         },
    //         {
    //         id: string,
    //         title: string,
    //         description: string,
    //         price: number
    //         }
    //     ]
    // }

    // let data: Orcamentos1 = {
    //     "estimateId": "12312412312",
    //     "estimateNumber": "000001",
    //     "estimateName": "Orçamento 1",
    //     "customerName": "Thomas",
    //     "cpf": "3125213123",
    //     "address": "Rua 1 de janeiro",
    //     "createdAt": "12/12/2020",
    //     "totalPrice": "R$1000",
    //     "jobDetails": [
    //         {
    //           "id": "43b04575-d052-4264-9ddd-5d3c8f28b7f8",
    //           "title": "Detalhe 1",
    //           "description": "Descrição do detalhe",
    //           "price": 1234.00
    //         },
    //         {
    //           "id": "16d2aa72-3bde-4a8c-a89c-9dbd786653f0",
    //           "title": "Detalhe 1",
    //           "description": "Descrição do detalhe",
    //           "price": 1234.00
    //         },
    //         {
    //           "id": "89f2fe1a-4dca-4b80-9729-3c28d3657d9d",
    //           "title": "Item 2",
    //           "description": "esse é o item 2",
    //           "price": 6493.00
    //         }
    //       ]
    // }
    const params = useParams<{ id: string }>()
    const [orcamento, setOrcamento] = useState<Orcamentos>()
    const [isLoading, setIsLoading] = useState<boolean>(true)



    useEffect(() => {

        fetch(`https://workestimate.azurewebsites.net/api/estimate/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setOrcamento(data)
                console.log(data)
                setIsLoading(false)
            })
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




