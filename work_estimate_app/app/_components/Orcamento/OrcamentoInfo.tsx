import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputFormComponent from './InputFormComponent';


export default function OrcamentoInfo({data}: any) {
  return (
    <div>
      <h1 className='font-bold text-[2.5rem] mb-5'>{data.estimateName}</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableBody>
          
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='text-xs opacity-80'>
                Nome do cliente
              </TableCell>
              <TableCell component="th" scope="row">
              <InputFormComponent data={data} defaultValue={data.customerName} type="customerName"/>
              </TableCell>
            </TableRow>
            <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               CPF
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.cpf} type="cpf"/>
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Telefone
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.phone} type="phone"/>
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               CEP
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.cep} type="cep"/>
             </TableCell>
           </TableRow>

           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Endereço
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.address} type="address"/>
             </TableCell>
           </TableRow>

           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Forma de Pagamento
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.paymentMethod} type="paymentMethod"/>
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Observação
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.observation} type="observation"/>
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Preço final
             </TableCell>
             <TableCell component="th" scope="row">
             <InputFormComponent data={data} defaultValue={data.totalPrice} type="totalPrice"/>
             </TableCell>
           </TableRow>
          
          
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}