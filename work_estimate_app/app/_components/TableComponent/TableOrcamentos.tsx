import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Orcamentos } from '@/app/meus-orcamentos/page';


function Row(props: { row: Orcamentos }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.estimateName}
        </TableCell>
        <TableCell align="right">{row.serviceOrder}</TableCell>
        <TableCell align="right">{row.createdAt}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell>Cliente</TableCell>
                    <TableCell>CPF</TableCell>
                    <TableCell>Endereço</TableCell>
                    <TableCell align="right">Valor total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell component="th" scope="row">
                        {row.customerName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.cpf}
                      </TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell align="right">{row.totalPrice}</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell align="left">
                      <Button variant="contained" className=' w-[250px] mt-4 !bg-[#1976d2]' >
                        <a href={`orcamento/${row.estimateId}`}>Ver orçamento completo</a></Button>
                      </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                   
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function TableOrcamentos ({data}: any ) {

    const [open, setOpen] = useState(false);

    return (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead className='bg-[#8AC903]'>
              <TableRow>
                <TableCell />
                <TableCell className='font-bold text-white text-lg'>Orçamento</TableCell>
                <TableCell align="right" className='font-bold text-white text-lg'>Nº do Orçamento</TableCell>
                <TableCell align="right" className='font-bold text-white text-lg'>Data de Criação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((orcamento: Orcamentos) => (
                <Row key={orcamento.estimateId} row={orcamento} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}