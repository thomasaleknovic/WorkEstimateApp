
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
    const [searchQuery ,setSearchQuery] = useState<string>()

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

    const filterData = (query:string | undefined, data:Orcamentos[] | undefined) => {
      if (!query) {
        return data;
      } else if (data) {
        return data.filter((d) => d.serviceOrder.toString().includes(query));
      }
    };

    const dataFiltered = filterData(searchQuery, orcamentos);


    if (isLoading) return <div className="flex mt-[200px] flex-col justify-center items-center"><CircularProgress/><p className="mt-4">Carregando informações</p></div>
    if (!orcamentos) return <div className="flex mt-[200px] flex-col justify-center items-center"><p className="mb-4">Nenhum registro encontrado</p><a href="/novo-orcamento"><Button color={'primary'} variant="contained" className='!bg-[#8AC903] !h-14'>
    Crie seu primeiro orçamento
  </Button></a></div>
  



    return (
        <div className="bg-white text-black h-full">
            <div className=" flex flex-col justify-center items-center w-full">
            <div className="w-full h-[200px] bg-[#8AC903] flex justify-center items-center">
              <div className="w-[300px] lg:w-3/4  flex justify-between items-center">
            <h1 className="font-bold text-[2rem] text-white">Meus Orçamentos</h1>
           
                    <TextField className="w-[300px] bg-white rounded-[4px]" id="search-input" label="Procure pelo número do orçamento" variant="outlined" onInput={(e) => {setSearchQuery((e.target as HTMLInputElement).value)}}/>
              </div>
                    
            </div>
                <div className="w-[90vw] lg:w-3/4 -mt-8 flex flex-col">
                    {
                        !isLoading ? <TableOrcamentos data={dataFiltered} /> : <div></div>
                    }
                </div>

            <a href="/novo-orcamento"><Button color={'primary'} variant="contained" className='!bg-[#8AC903] !h-14 mt-6'>
    Criar Novo Orçamento
  </Button></a>
            </div>

        </div>
    );

}


