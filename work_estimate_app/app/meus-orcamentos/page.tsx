
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

           fetch('https://workestimate.azurewebsites.net/api/estimate/all')
          .then((res) => res.json())
          .then((data) => {
           setOrcamentos(data)
            console.log(orcamentos)
            setIsLoading(false)
          })
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


