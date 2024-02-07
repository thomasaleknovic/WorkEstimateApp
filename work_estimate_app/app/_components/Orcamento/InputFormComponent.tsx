"use client"

import { useEffect, useState } from 'react';

export default function InputFormComponent({data, defaultValue, type}: any) {

    const [inputType, setInputType] = useState<string>("text")
   
    useEffect(() => {
        if (type === "totalPrice") {
            setInputType("number")
        }
    }, [])

      function handleChange (info: any) {
        let updateEstimate = data

        
      
        if (type === "totalPrice") {
            setInputType("number")
            updateEstimate.totalPrice = info.target.value
        }
        if (type === "observation") {
            updateEstimate.observation = info.target.value
        }
        if (type === "paymentMethod") {
            updateEstimate.paymentMethod = info.target.value
        }
        if (type === "address") {
            updateEstimate.address = info.target.value
        }
        if (type === "cep") {
            updateEstimate.cep = info.target.value
        }
        if (type === "cpf") {
            updateEstimate.cpf = info.target.value
        }
        if (type === "customerName") {
            updateEstimate.customerName = info.target.value
        }
        
        try {
          
          fetch(`https://workestimate.azurewebsites.net/api/estimate/${data.estimateId}/edit`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(updateEstimate),
          })

          
        } catch {

        }
      }


  return (
    <form>
          {type === "observation"  || type === "paymentMethod" ?
          <textarea className='focus:outline-none h-10' name={type} defaultValue={defaultValue} onChange={data => handleChange(data)}/>
          :
          <input className='focus:outline-none h-10' name={type} type={inputType} defaultValue={defaultValue} onChange={data => handleChange(data)}/>
        
        }
      </form>
  );
}

