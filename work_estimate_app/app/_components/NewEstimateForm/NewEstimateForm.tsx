import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Stack } from '@mui/material';



export default function NewEstimateForm() {
   

    const formContext = useForm<{
      estimateName: string,
      customerName: string,
      cpf: string,
      address: string,
  
      }>();

    return (
        <FormContainer formContext={formContext} onSuccess={data => console.log(data)}>
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
