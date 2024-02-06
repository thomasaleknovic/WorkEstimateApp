import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Orcamentos } from '@/app/meus-orcamentos/page';
import TotalPriceFormComponent from './TotalPriceFormComponent';





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
                {data.customerName}
              </TableCell>
            </TableRow>
            <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               CPF
             </TableCell>
             <TableCell component="th" scope="row">
               {data.cpf}
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Endereço
             </TableCell>
             <TableCell component="th" scope="row">
               {data.address}
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Forma de Pagamento
             </TableCell>
             <TableCell component="th" scope="row">
               {data.paymentMethod}
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Observação
             </TableCell>
             <TableCell component="th" scope="row">
               {data.observation}
             </TableCell>
           </TableRow>
           <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" className='text-xs opacity-80'>
               Preço final
             </TableCell>
             <TableCell component="th" scope="row">
              <TotalPriceFormComponent data={data} />
             </TableCell>
           </TableRow>
          
          
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}