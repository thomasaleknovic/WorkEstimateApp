
"use client"

import { useEffect, useState } from "react";
import TableOrcamentos from "../_components/TableComponent/TableOrcamentos";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export type Orcamentos = {
    estimateId: string,
    estimateNumber: string,
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

    useEffect(() => {

           fetch('https://workestimateapi.onrender.com/api/estimate/all')
          .then((res) => res.json())
          .then((data) => {
           setOrcamentos(data)
            console.log(orcamentos)
            setIsLoading(false)
          })

        // let orcamentos1 = {
        //     "estimateId": "12312412312",
        //     "estimateNumber": "000001",
        //     "estimateName": "Orçamento 1",
        //     "customerName": "Thomas",
        //     "cpf": "3125213123",
        //     "address": "Rua 1 de janeiro",
        //     "createdAt": "12/12/2020",
        //     "totalPrice": "R$1000",
        //     "jobDetails": "detalhes"
        // }

        // let orcamentos2 = {
        //     "estimateId": "12312412312",
        //     "estimateNumber": "000002",
        //     "estimateName": "Orçamento 2",
        //     "customerName": "Ana Laura",
        //     "cpf": "3125213123",
        //     "address": "Rua 1 de janeiro",
        //     "createdAt": "12/12/2020",
        //     "totalPrice": "R$1000",
        //     "jobDetails": "detalhes"
        // }

        // let data: [Orcamentos] = [orcamentos1]
        // data.push(orcamentos2)

        // setOrcamentos(data)
        // setIsLoading(false)
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (!orcamentos) return <p>No profile data</p>



    return (
        <div className="bg-white text-black h-full">
            <div className=" flex flex-col justify-center items-center w-full pt-10">
                <h1 className="font-bold text-[2rem]">Meus Orçamentos</h1>
                <div className="w-3/4 mt-10 flex flex-col">

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


