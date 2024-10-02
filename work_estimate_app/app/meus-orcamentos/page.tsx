
"use client"

import { useEffect, useState } from "react";
import TableOrcamentos from "../_components/TableComponent/TableOrcamentos";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'


export type Orcamentos = {
    estimateId: string,
    estimateNumber: string,
    serviceOrder: string,
    estimateName: string,
    customerName: string,
    cpf: string,
    address: string,
    createdAt: string,
    totalPrice: string,
    jobDetails: string

}

export default function MeusOrcamentos() {

    const [orcamentos, setOrcamentos] = useState<[Orcamentos]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [searchQuery ,setSearchQuery] = useState<String>()

    const router = useRouter()

  

    useEffect(() => {

        const token = localStorage.getItem('bearerToken');

        if (token) {
            fetch('https://workestimateapi.onrender.com/api/estimate/all', {
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
                setOrcamentos(data);
                setIsLoading(false);
              })
              .catch((error) => {
                console.error('An error occurred during the fetch:', error);
                router.push('/login')

              });
          } else {
            // Handle the case where the token is not available
            console.error('Bearer token not found in localStorage');
             return router.push('/login')
          }
    }, [])

    const filterData = (query, data) => {
      if (!query) {
        return data;
      } else {
        return data.filter((d) => d.serviceOrder.toString().includes(query));
      }
    };

    const dataFiltered = filterData(searchQuery, orcamentos);


    if (isLoading) return <div className="flex mt-[200px] flex-col justify-center items-center"><CircularProgress/><p className="mt-4">Carregando informações</p></div>
    if (!orcamentos) return <div className="flex mt-[200px] flex-col justify-center items-center"><p className="mb-4">Nenhum registro encontrado</p><a href="/novo-orcamento"><Button color={'primary'} variant="contained" className='!bg-[#1976d2] !h-14'>
    Crie seu primeiro orçamento
  </Button></a></div>
  



    return (
        <div className="bg-white text-black h-full">
            <div className=" flex flex-col justify-center items-center w-full pt-10">
                <h1 className="font-bold text-[2rem]">Meus Orçamentos</h1>
                <div className="w-[90vw] lg:w-3/4 mt-10 flex flex-col">

                    <div className="place-self-end mb-10">
                    <TextField className="w-[300px]" id="search-input" label="Procure pelo número do orçamento" variant="outlined" onInput={(e) => {setSearchQuery(e.target.value)}}/>
                    </div>
                    {
                        !isLoading ? <TableOrcamentos data={dataFiltered} /> : <div></div>
                    }
                </div>

            </div>

        </div>
    );

}


