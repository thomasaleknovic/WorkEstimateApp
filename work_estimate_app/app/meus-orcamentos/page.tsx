
"use client"

import { useEffect, useState } from "react";
import TableOrcamentos from "../_components/TableComponent/TableOrcamentos";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
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


    if (!isLoading) return <div className="flex mt-[200px] flex-col justify-center items-center"><CircularProgress/><p className="mt-4">Carregando informações</p></div>
    if (!orcamentos) return <p>No profile data</p>



    return (
        <div className="bg-white text-black h-full">
            <div className=" flex flex-col justify-center items-center w-full pt-10">
                <h1 className="font-bold text-[2rem]">Meus Orçamentos</h1>
                <div className="w-[90vw] lg:w-3/4 mt-10 flex flex-col">

                    <div className="place-self-end mb-10">
                    <Stack spacing={2} sx={{ width: 300 }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={orcamentos.map((option) => option.estimateNumber)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Procure pelo número do orçamento"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                    </div>
                    {
                        !isLoading ? <TableOrcamentos data={orcamentos} /> : <div></div>
                    }
                </div>

            </div>

        </div>
    );

}


