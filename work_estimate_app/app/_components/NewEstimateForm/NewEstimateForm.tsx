import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation'


export default function NewEstimateForm() {
  

  const router = useRouter()

    const formContext = useForm<{
      estimateName: string,
      customerName: string,
      cpf: string,
      address: string,
  
      }>();

      function handleSubmit (data: any) {

       
        try {

          fetch("https://workestimateapi.onrender.com/api/estimate/new", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(data),
          })

          
        } catch {

        }
       return router.push('/meus-orcamentos')
      }

    return (
        <FormContainer formContext={formContext} onSuccess={data => handleSubmit(data)}>
        <Stack spacing={2}>
          <TextFieldElement name={'estimateName'} label={'Nome do orçamento'} />
          <TextFieldElement name={'customerName'} label={'Nome do cliente'} />
          <TextFieldElement name={'cpf'} label={'CPF do cliente'} />
          <TextFieldElement name={'address'} label={'Endereço do cliente'} />
          <Button type={'submit'} color={'primary'} variant="contained" className='!bg-[#1976d2] !h-14'>
            Criar orçamento
          </Button>
        </Stack>
      </FormContainer>
    );


}
