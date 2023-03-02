import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { Add, ArrowDropDown, ArrowDropUp, Delete, RefreshRounded, SortByAlpha } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { Pagination } from '@mui/material'
import { UserState } from '@app/User/user.types';
import request from '@config';
import { LocalLoading } from './appointment-management';
import Search from '@components/Search/Search';
import FormInput from '@components/Forms/FormInput/FormInput';
import AreYouSureModal from '@components/Modals/AreYouSureModal';
import { toast } from 'react-hot-toast';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
export interface Assay {
    Id: string;
    Name: string;
    created_at: string;
    Status: "Gönderildi" | "Bekliyor",
    Link: string | null;
    user: {
        Email: string;
        information: {
            Fullname: string;
            Phone: string;
        }
    } | null
}
export default function Assays() {

    const [assays, setAssays] = useState<Assay[]>([]);
    const [page, setPage] = useState(1);

    const [searchKey, setSearchKey] = useState('');

    const [pageCount, setPageCount] = React.useState(1)

    const Row = ({ assay }: { assay: Assay }) => {
        const [open, setOpen] = useState(false);
        const [openAreYouSureModal, setOpenAreYouSureModal] = useState(false);
        const [assayFiles, setAssayFiles] = useState<FileList | null>(null);
        return <>
            {openAreYouSureModal && <AreYouSureModal finish={({ confirmed }) => {
                console.log("confirmed", confirmed);
                if (confirmed) {
                    request.delete(`/userassays/${assay.Id}`).then(() => {
                        refresh();
                        toast.success('Tahlil silindi')
                    }).catch(() => {
                        toast.error('Tahlil silinemedi tekrar deneyin.')
                        refresh();
                    })
                }
                setOpenAreYouSureModal(false);
            }} text='Tahlil silinecek' />}

            <TableRow>
                {assay?.user ? (<> <TableCell >
                    <p className='max-w-[150px] m w-max'> {assay.user?.information?.Fullname || '-'} </p>
                </TableCell>
                    <TableCell >
                        <p> {assay.user?.Email} </p>
                    </TableCell>
                    <TableCell >
                        <p> {assay.user?.information?.Phone || '-'} </p>
                    </TableCell></>) : <>
                    <TableCell >
                        <p> {'-'} </p>
                    </TableCell>
                    <TableCell >
                        <p> {'-'} </p>
                    </TableCell>
                    <TableCell>
                        <p> {'-'} </p>
                    </TableCell>
                </>}
                <TableCell>
                    <p className='max-w-[150px] m w-max'> {assay?.Name || '-'} </p>
                </TableCell>
                <TableCell>
                    <p className='max-w-[150px] m w-max'>

                        {

                            new Date(assay.created_at).toLocaleDateString("tr-TR", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric"
                            })
                            || '-'
                        }
                    </p>
                </TableCell>
                {assay.Status ? <TableCell>
                    <p>{assay.Status} </p>
                </TableCell> : <TableCell>
                    <p> boş </p>
                </TableCell>}
                <TableCell>
                    <button disabled={!assay?.Link} onClick={() => {
                        window.open(assay?.Link || '', '_blank')
                    }} className=' disabled:opacity-50 flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                        <span>Görüntüle</span>
                    </button>
                </TableCell>
                <TableCell>
                    <button onClick={() => {
                        setOpenAreYouSureModal(true)
                    }} className=' disabled:opacity-50 flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] '>
                        <Delete className='!text-[#e46c6cea]' />
                    </button>
                </TableCell>
            </TableRow>
            {
                open && <div className="w-full flex flex-col gap-3 min-h-[276px] p-4 bg-[transparent]">
                    <DocumentsUpload title=" " value={assayFiles} onChange={(e) => {
                        console.log("değişti", e.currentTarget?.files);
                        setAssayFiles(e.currentTarget?.files)
                    }} />

                    <button className='bg-[#4E929D] text-[white] rounded-[20px_5px] self-end w-[146px] h-[50px]'>Gönder</button>
                </div>
            }
        </>
    }
    const getAssays = async () => {
        try {
            const res = await request.get(`/userassays?page=${page}`);
            console.log("DATA", res.data);
            setAssays(res.data.data);
            setPageCount(res.data.PageCount);
        } catch (error) {
            console.log("error", error);

        }
    }

    const search = async () => {
        if (searchKey.trim().length < 1) return;
        try {
            const res = await request.post(`/search/assay?page=${page}`, {
                key: searchKey
            });
            console.log("DATA", res.data);
            setAssays(res.data.data);
            setPageCount(res.data.PageCount);
        } catch (error) {
            console.log("error", error);
        }
    }

    const refresh = () => {
        if (searchKey.trim().length > 0) search();
        else getAssays();
    }

    useEffect(() => {
        refresh();
    }, [page, searchKey])

    const [openAddAssayModal, setOpenAddAssayModal] = useState(false);

    const AddAssayModal = () => {
        const [key, setKey] = useState('');
        const [selected, setSelected] = useState<any>();
        const [assayName, setAssayName] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        const createAssay = async () => {
            return request.post('/userassays', {
                Name: assayName,
                UserId: selected?.Id
            })
        }

        const handleCreateAssay = async () => {
            try {
                setIsLoading(true);
                await createAssay()
                await getAssays();
                setOpenAddAssayModal(false);
                setIsLoading(false);
            } catch (error) {
                console.log("error", error);
                setOpenAddAssayModal(false);
                setIsLoading(false);
            }
        }


        return <>
            <div onClick={(e) => {

                setOpenAddAssayModal(false);
            }} className="z-[999] grid place-content-center h-screen w-screen fixed bg-[black] bg-opacity-25">
                <div onClick={(e) => e.stopPropagation()} className='lg:w-[600px] p-[20px] relative flex flex-col gap-[10px] rounded-[20px_5px] max-h-[300px] bg-[white]'>
                    <h1 className='text-[#184E57] text-[24px] leading-none mb-[10px] font-nexa-bold '> Tahlil Talebi Oluştur </h1>
                    {isLoading && <LocalLoading message='Tahlil talebiniz oluşturuluyor...' />}
                    <FormInput placeholder='Tahlil adı' value={assayName} onChange={(e) => { setAssayName(e.currentTarget.value) }} />
                    <Search setKey={setKey} url='/search/user' selected={selected} setSelected={setSelected} _key={key} />
                    <button onClick={() => handleCreateAssay()} disabled={!(selected && assayName)} className='bg-[#4E929D] disabled:opacity-25  text-[white] w-[120px] h-[40px] text-[14px]'> Tahlil Talep Et </button>
                </div>

            </div>
        </>
    }

    return <>
        {openAddAssayModal && <AddAssayModal />}
        <DashboardLayout>
            <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
                <div className="w-full flex text-start items-center justify-between py-[26px] px-[10px]">
                    <div className="flex flex-col justify-between w-full">
                        <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Tahliller</Text>
                        <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Hastalara ait tahlilleri görüntüleyin.</Text>
                    </div>
                    <button onClick={() => { setOpenAddAssayModal(true) }} className='bg-[#4E929D] flex text-[14px]  w-[150px] h-[40px] items-center justify-center text-[white] rounded-[20px_5px]'>
                        <Add className="text-[white] text-[8px] md:text-[14px]" />
                        <p>Tahlil Talebi</p>
                    </button>
                </div>

                <div className="w-[100%] md:w-[60%] gap-[10px] px-3 mt-[10px] mb-[30px] flex">
                    <input type="text" value={searchKey} onChange={(e) => {
                        setSearchKey(e.currentTarget.value)
                    }} placeholder='Ad Soyad ile arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                    <button onClick={() => {
                        refresh();
                    }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                        <RefreshRounded />
                    </button>
                </div>
                {assays?.length > 0 ? <>
                    <TableContainer className='bg-[white] '>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Ad Soyad</TableCell>
                                    <TableCell align="left">E-posta</TableCell>
                                    <TableCell align="left">Telefon</TableCell>
                                    <TableCell align="left">Belge Adı</TableCell>
                                    <TableCell align="left">Tarih</TableCell>
                                    <TableCell align="left">Durum</TableCell>
                                    <TableCell align="left">Görüntüle</TableCell>
                                    <TableCell align="left">Sil</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    assays?.length > 0 ? assays.map((assay, index) => {
                                        return <Row assay={assay} key={index} />
                                    }) : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Tahliliniz bulunmamaktadır </h1>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                        setPage(value)
                    }} count={pageCount} />
                </> : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Tahliliniz bulunmamaktadır </h1>}
            </div>
        </DashboardLayout></>
}