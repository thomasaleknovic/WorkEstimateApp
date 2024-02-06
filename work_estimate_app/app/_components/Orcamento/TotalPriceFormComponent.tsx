import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation'
import { Orcamentos } from '@/app/meus-orcamentos/page';

export default function TotalPriceFormComponent({data}: any) {

    const router = useRouter()

    const formContext = useForm<{
      totalPrice: number,
      sssssssssssssssssssssssssssssss

  
      }>();

      function handleSubmit (price: any) {
      
        let updateEstimate = data
        updateEstimate.totalPrice = price
       
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
        <Stack spacing={2}>
          <TextFieldElement name={'totalPrice'} label={'Preço total'} onChange={data => handleSubmit(data)}/>
          <Button type={'submit'} color={'primary'} variant="contained" className='!bg-[#1976d2] !h-14'>
            Criar orçamento
          </Button>
        </Stack>
      </FormContainer>
  );
}

