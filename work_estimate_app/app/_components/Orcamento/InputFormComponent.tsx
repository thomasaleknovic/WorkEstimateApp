"use client"

import { useEffect, useState } from 'react';

export default function InputFormComponent({data, defaultValue, type}: any) {

    const [inputType, setInputType] = useState<string>("text")
    let timeoutId: any;

    useEffect(() => {
        if (type === "totalPrice") {
            setInputType("number")
        }
    }, [])
  

  const handleThrottledChange = (info: any) => {
    // Cancela o timeout anterior se houver
    clearTimeout(timeoutId);

    // Configura um novo timeout para a próxima chamada
    timeoutId = setTimeout(() => {
     
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
        
        console.log("!!!!!!!!!!!!!!!!!Rodou a função!!!!!!!!!!!!!!!!!!!!!!!!!")
        try {
          
          fetch(`https://workestimate.azurewebsites.net/api/estimate/${data.estimateId}/edit`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(updateEstimate),
          })

          
        } catch {
          throw new Error("Erro ao atualizar orçamento, revise os dados e tente novamente.")
        }
     
    }, 1000); // 1000 milissegundos (1 segundo) de intervalo
  };


      function handleChange (info: any) {
        handleThrottledChange(info);
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

