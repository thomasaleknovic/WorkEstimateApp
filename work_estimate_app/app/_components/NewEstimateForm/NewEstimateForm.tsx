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
      phone: string,
      cpf: string,
      cep: string,
      address: string,
      paymentMethod: string,
      observation: string

  
      }>();

      function handleSubmit (data: any) {

        const token = localStorage.getItem('bearerToken');

        if (token) {

        try {
          console.log(token)
          fetch("https://workestimate.azurewebsites.net/api/estimate/new", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              
            },
            body: JSON.stringify(data),
          })

          
        } catch {

        }}
        else {
          // Handle the case where the token is not available
          console.error('Bearer token not found in localStorage');
          router.push('/login')
        }
       return router.push('/meus-orcamentos')
      }

    return (
        <FormContainer formContext={formContext} onSuccess={data => handleSubmit(data)}>
        <Stack spacing={2}>
          <TextFieldElement name={'estimateName'} label={'Nome do orçamento'} />
          <TextFieldElement name={'customerName'} label={'Nome do cliente'} />
          <TextFieldElement name={'phone'} label={'Telefone do cliente'} />
          <TextFieldElement name={'cpf'} label={'CPF do cliente'} />
          <TextFieldElement name={'cep'} label={'CEP do cliente'} />
          <TextFieldElement name={'address'} label={'Endereço do cliente'} />
          <TextFieldElement name={'paymentMethod'} label={'Forma de pagamento'} />
          <TextFieldElement name={'observation'} label={'Observação'} />
          <Button type={'submit'} color={'primary'} variant="contained" className='!bg-[#1976d2] !h-14'>
            Criar orçamento
          </Button>
        </Stack>
      </FormContainer>
    );


}
