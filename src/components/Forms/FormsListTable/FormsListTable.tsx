import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import StepStatus, { StepStatusType } from '../Status/Status';
import { Add, MoreVertOutlined, PlusOne, PlusOneSharp } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import ComponentHeading from '@components/BoxHeading/BoxHeading';
import { v4 } from 'uuid';

function createData(
    Date: string,
    FormTitle: string,
    DocumentStatus: StepStatusType,
) {
    return { Date, FormTitle, DocumentStatus };
}

const rows = [
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'inReview'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'rejected'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'pending'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
    createData(new Date().toLocaleDateString(), 'Beslenme Değerlendirme', 'confirmed'),
];

export default function BasicTable() {
    return (<div>
        <div className='flex justify-between items-center mb-[35px]'>
            <ComponentHeading main='Beslenme Değerlendirme' sub='Tüm “Beslenme Değerlendirme” formlarınızı görüntüleyin.' />
            <Button variant='contained' sx={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.4px',
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                backgroundColor: '#4E929D',
                borderRadius: '20px 5px 20px 5px',
                width: '173px',
                height: '48px',
            }} className='font-nexa-bold'>
                <Add />
                <p className='text-[16px]'>
                    Form Doldur
                </p>
            </Button>

        </div>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='bg-[#F5F5F5]'>
                    <TableRow>
                        <TableCell>
                            <span className='font-nexa-bold'>
                                Tarih
                            </span>
                        </TableCell>
                        <TableCell align="left">
                            <span className='font-nexa-bold'>
                                Form Adı
                            </span>
                        </TableCell>
                        <TableCell align="left">
                            <span className='font-nexa-bold'>
                                Belge Durum
                            </span></TableCell>
                        <TableCell align="left">
                            <span className='font-nexa-bold'>
                                İşlem
                            </span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <TableRow
                            key={v4()}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '50px', overflow: 'none' }}
                        >
                            <TableCell component="th" scope="row">
                                <span className='text-[#4D5628] font-nexa-bold'>
                                    {row.Date}
                                </span>
                            </TableCell>
                            <TableCell align="left">
                                <span className='text-[#4D5628] font-nexa-bold'>
                                    {row.FormTitle}
                                </span>
                            </TableCell>
                            <TableCell align="left">
                                <StepStatus status={row.DocumentStatus} />
                            </TableCell>
                            <TableCell align="left"> <FormRowButtons /> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination count={10} shape="rounded" />
        </TableContainer>
    </div>
    );
}


const FormRowButtons = () => {
    return <div className='bg-[#EBF3F4] flex items-center  justify-around w-[100px] h-[30px] text-[#4E929D]'>
        <div> İNCELE </div>
        <div> <MoreVertOutlined fontSize='small' /> </div>
    </div>
}