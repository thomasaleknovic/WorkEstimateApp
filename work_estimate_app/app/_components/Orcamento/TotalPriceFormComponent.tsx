import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation'
import { Orcamentos } from '@/app/meus-orcamentos/page';

export default function TotalPriceFormComponent({data}: any) {


    const formContext = useForm<{
      totalPrice: number,
  
      }>();

      function handleChange (price: any) {
      
        let updateEstimate = data
        updateEstimate.totalPrice = price.target.value
       
        console.log(updateEstimate)
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
    <FormContainer formContext={formContext}>
          <input className='focus:outline-none h-10' name={'totalPrice'} type='number' defaultValue={data.totalPrice} onChange={data => handleChange(data)}/>
      </FormContainer>
  );
}

