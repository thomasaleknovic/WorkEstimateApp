
"use client"

import { useEffect, useState } from "react";
import TableOrcamentos from "../_components/TableComponent/TableOrcamentos";

export type Orcamentos = {
    estimateId: string
    estimateName: string,
    customerName: string,
    cpf: string,
    address: string,
    createdAt: string,
    jobDetails: string

}

export default function MeusOrcamentos () {

    const [orcamentos, setOrcamentos] = useState<[Orcamentos]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect( () => {

    //    fetch('https://workestimateapi.onrender.com/api/estimate/all')
    //   .then((res) => res.json())
    //   .then((data) => {
     //    setOrcamentos(data)
    //     console.log(orcamentos)
    //     setIsLoading(false)
    //   })

    let orcamentos1 = {
        "estimateId": "12312412312",
        "estimateName": "Orçamento 1",
        "customerName": "Thomas",
        "cpf": "3125213123",
        "address": "Rua 1 de janeiro",
        "createdAt": "12/12/2020",
        "jobDetails": "detalhes"
    }

    let orcamentos2 = {
        "estimateId": "12312412312",
        "estimateName": "Orçamento 1",
        "customerName": "Thomas",
        "cpf": "3125213123",
        "address": "Rua 1 de janeiro",
        "createdAt": "12/12/2020",
        "jobDetails": "detalhes"
    }

    let data: [Orcamentos] = [orcamentos1]
    data.push(orcamentos2)

    setOrcamentos(data)
    setIsLoading(false)
   }, [])

      

    console.log(orcamentos)

    if (isLoading) return <p>Loading...</p>
    if (!orcamentos) return <p>No profile data</p>

return (
    <div className="bg-white text-black">
        <div>
            <h1>Orçamentos</h1> 
        {
            !isLoading ? <TableOrcamentos data={orcamentos}/> : <div></div>
        }
          
             
        </div> 

    </div>
);

}


