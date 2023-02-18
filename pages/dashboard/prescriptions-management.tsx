import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { Add, ArrowDropDown, ArrowDropUp, Cancel, Close, Delete, Description, Edit, RefreshRounded, SortByAlpha } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { Pagination } from '@mui/material'
import FormInput, { FormInputTextArea } from '@components/Forms/FormInput/FormInput';
import classNames from 'classnames';
import { v4 } from 'uuid';
import { UserInformation, UserState } from '@app/User/user.types';
import request from '@config';
import { LocalLoading } from './appointment-management';
import { toast } from 'react-hot-toast';
import AreYouSureModal from '@components/Modals/AreYouSureModal';
interface IPrescriptionItem {
    Id: string;
    UserId: string;
    Link: string;
    Description: string;
    created_at: string;
    updated_at: string;
    Name: string;
    user: null | any;
}
interface INewPrespriptionModal {
    open: boolean;
    data: {
        Name: string;
        UserId: string;
        Description: string;
        File: FileList | null;
    }
}

interface IEditPrespriptionModal {
    open: boolean;
    data: {
        Id: string;
        Name: string;
        UserId: string;
        Description: string;
        File: FileList | null;
        UserName: string;
    }
}
const Row = ({ data, refresh }: { data: IPrescriptionItem, refresh: () => void }) => {

    console.log("Prespriction DAta", data);

    const [areYouSureModalState, setAreYouSureModalState] = useState<boolean>(false)
    const [editModalState, setEditModalState] = useState<IEditPrespriptionModal>({
        open: false,
        data: {
            Id: data.Id,
            UserId: data.UserId,
            UserName: data.user?.information?.Fullname,
            Name: data.Name,
            Description: data.Description,
            File: null
        }
    })


    return <div className='flex flex-col w-full'>
        {editModalState.open && <EditPrespriptionModal setter={setEditModalState} finishEvent={(() => {
            setEditModalState({
                open: false,
                data: {
                    ...editModalState.data,
                }
            })
            refresh()
        })}
            data={editModalState} />}
        <div className='w-full flex p-3 border-t-[1px]'>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.information?.Fullname || '-'
                    }
                </p>
            </div>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.Email || '-'
                    }

                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        data.user?.information?.Phone || '-'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {

                        new Date(data.updated_at || data.created_at).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        })
                        || '-'
                    }
                </p>
            </div>
            <div className='flex-[4] flex'>
                <button onClick={() => {
                    window.open(data.Link, "_blank")
                }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[90px] h-[30px] text-[#4E929D]'>
                    <span>Görüntüle</span>
                </button>
                <button onClick={() => {
                    setEditModalState({
                        ...editModalState,
                        open: true
                    })
                }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] min-w-[20px] ml-2 h-[30px] text-[#4E929D]'>
                    <Edit />
                </button>
                {areYouSureModalState && <AreYouSureModal text="Reçete silinecek" finish={({ confirmed }) => {
                    if (confirmed) {
                        request.delete(`/userprescriptions/${data.Id}`).then(res => {
                            toast.success("Reçete silindi");
                            setAreYouSureModalState(false);
                            refresh();
                        }).catch(err => {
                            console.log(err);
                            toast.error("Bir hata oluştu");
                            refresh();
                        })
                    }
                    setAreYouSureModalState(false);
                }} />}
                <button onClick={() => {
                    setAreYouSureModalState(true);
                }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] min-w-[20px] ml-2 h-[30px] text-[#4E929D]'>
                    <Delete />
                </button>
            </div>
        </div>
    </div>
}


const EditPrespriptionModal = ({ data, setter, finishEvent }: { data: IEditPrespriptionModal, setter: (newData: IEditPrespriptionModal) => void, finishEvent: () => void }) => {
    const [loading, setLoading] = useState(false);
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Name: e.currentTarget.value
            }
        })
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Description: e.currentTarget.value
            }
        })
    }

    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                File: e.currentTarget.files
            }
        })
    }
    const [valid, setValid] = useState(false);
    const handleCreatePrescription = () => {
        console.log(data);
        setValid(false)
        let formData = new FormData();
        formData.append('Name', data.data.Name);
        formData.append('UserId', data.data.UserId);
        formData.append('Description', data.data.Description);
        data.data.File && formData.append('File', data.data.File![0]);
        setLoading(true);
        request.post(`/userprescriptions/${data.data.Id}?_METHOD=PUT`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setLoading(false);
            toast.success("Reçete güncellendi");
            console.log("update ok", res);
            finishEvent();
        }).catch(err => {
            setLoading(false);
            toast.error("Reçete güncellenirken bir sorun oluştu tekrar deneyin.");
            console.log("update hata ", err);
            finishEvent();
        })
    }
    const handleCancel = () => {
        setter({
            data: {
                ...data.data,
            }, open: false
        })
    }

    useEffect(() => {
        if (data.data.Name && data.data.UserId && data.data.Description) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [data.data])

    return data.open ? <div onClick={(e) => {
        handleCancel();
        e.stopPropagation();
    }} className='fixed z-[9999] top-0 grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="w-[904px] relative min-h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
            {loading && <LocalLoading message='Bekleyiniz' />}
            <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Reçeteyi Düzenle</h1>
            <p className='text-[#5C5C5C] text-[16px]'>Reçeteyi düzenlemek için gerekli alanları doldurunuz.</p>
            <div className="flex flex-col gap-4 mt-[45px] mb-2 relative">
                <p className='font-nexa-bold text-[24px] opacity-75 cursor-not-allowed'> {data.data.UserName || 'YOOK'} </p>
                <FormInput value={data.data.Name} label='Reçete Adı' onChange={handleChangeTitle} />
                <FormInputTextArea value={data.data.Description} onChange={handleChangeDescription} label='Açıklama' />
                <DocumentsUpload title="Güncel Reçete (Opsiyonel)" value={data.data.File} onChange={handleSelectFile} />
            </div>
            <button disabled={!valid} onClick={handleCreatePrescription} className={classNames('text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px]', {
                "opacity-50 cursor-not-allowed": !valid,
            })}>
                Güncelle
            </button>
            <button onClick={handleCancel} className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                <Close />
            </button>
        </div>

    </div> : <></>
}


const NewPrespriptionModal = ({ data, setter, finishEvent }: { data: INewPrespriptionModal, setter: (newData: INewPrespriptionModal) => void, finishEvent: () => void }) => {
    //api'den gelen patient listesi
    //listeden bir patient seçildiğinde çalıştırılacak fonksiyon
    const selectPatient = (Id: string) => {
        setter({
            ...data, data: {
                ...data.data,
                UserId: Id
            }
        })
    }


    const [searchResults, setSearchResults] = useState<UserState[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<UserState | null>(null);
    const [searchKey, setSearchKey] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearchPatient = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setSearchKey(e.currentTarget.value);
    }

    const searchPatient = (key: string) => {
        request.post(`/search/user/patient?page=1`, {
            key
        }).then(res => {
            console.log(res.data);
            setSearchResults(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (!selectedPatient && searchKey.length > 0) {
            console.log("g 1");

            searchPatient(searchKey);
        } else {
            console.log("g 2");
            setSearchResults([]);
        }
    }, [searchKey, selectedPatient]);

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Name: e.currentTarget.value
            }
        })
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                Description: e.currentTarget.value
            }
        })
    }

    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({
            ...data, data: {
                ...data.data,
                File: e.currentTarget.files
            }
        })
    }
    const [valid, setValid] = useState(false);
    const handleCreatePrescription = () => {
        console.log(data);
        setValid(false)
        let formData = new FormData();
        formData.append('Name', data.data.Name);
        formData.append('UserId', data.data.UserId);
        formData.append('Description', data.data.Description);
        formData.append('File', data.data.File![0]);
        setLoading(true);
        request.post('/userprescriptions', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setLoading(false);
            toast.success("Reçete oluşturuldu");
            console.log("EKLENDI", res);
            setSelectedPatient(null);
            finishEvent();
        }).catch(err => {
            setLoading(false);
            toast.error("Reçete oluşturulurken bir sorun oluştu tekrar deneyin.");
            console.log("EKLENEMEDI ", err);
            setSelectedPatient(null);
            finishEvent();
        })
    }
    const handleCancel = () => {
        setter({
            data: {
                Name: '',
                UserId: '',
                Description: '',
                File: null
            }, open: false
        })
    }



    useEffect(() => {
        if (data.data.Name && data.data.UserId && data.data.Description && data.data.File) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [data.data])

    const UserResultsItem = ({ item, cancel = false }: { item: UserState, cancel?: boolean }) => {
        return (
            <div onClick={() => {
                setSelectedPatient(item)
                item?.Id && selectPatient(item.Id)
            }} className="w-full h-[40px] border-t-[1px] flex items-center px-4">
                <p>
                    {item.Information.Fullname}
                </p>
                {
                    cancel && (<button onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                        e.stopPropagation();
                        //setSelectedPatient işleminden sonra rerender edilmemesinin nedeni : https://stackoverflow.com/questions/53253940/react-hooks-usestate-not-updating-immediately
                        setSelectedPatient(null)
                        setSearchKey('');

                    }} className="ml-auto">
                        <Cancel />
                    </button>)
                }
            </div>
        )
    }

    const UserResults = () => {
        return (<div className="w-full max-h-[400px] absolute top-[50px] z-[99] bg-[white] left-0 border-[#4E929D]-500 border-2">
            {searchResults.map((item, index) => <UserResultsItem key={index} item={item} />)}
        </div>)
    }

    return data.open ? <div onClick={(e) => {
        handleCancel();
        e.stopPropagation();
    }} className='fixed z-[9999] top-0 grid place-content-center left-0 w-screen h-screen bg-opacity-50 bg-black-100'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="w-[904px] relative min-h-[356px] px-[32px] py-[40px] bg-[white] rounded-[10px] flex flex-col">
            {loading && <LocalLoading message='Bekleyiniz' />}
            <h1 className="text-[#4E929D] !text-[24px] font-nexa-bold">Reçete Oluştur</h1>
            <p className='text-[#5C5C5C] text-[16px]'> Hastaya reçete oluşturmak için gerekli alanları doldurunuz.</p>
            <div className="flex flex-col gap-4 mt-[45px] mb-2 relative">
                {!selectedPatient && <FormInput onChange={handleSearchPatient} placeholder='Hasta Ara*' />}
                {!selectedPatient && <UserResults />}
                {selectedPatient && <UserResultsItem item={selectedPatient as UserState} cancel={true} />}
                <FormInput label='Reçete Adı' onChange={handleChangeTitle} />
                <FormInputTextArea onChange={handleChangeDescription} label='Açıklama' />
                <DocumentsUpload title="Reçete" value={data.data.File} onChange={handleSelectFile} />
            </div>
            <button disabled={!valid} onClick={handleCreatePrescription} className={classNames('text-[white] mt-auto rounded-[20px_5px] font-nexa-bold bg-[#4E929D] w-[252px] h-[50px]', {
                "opacity-50 cursor-not-allowed": !valid,
            })}>
                Oluştur
            </button>
            <button onClick={handleCancel} className='w-[50px] right-[20px] top-[20px] absolute text-[white] h-[50px] hover:bg-[#df7676] hover:shadow-deepgreen-100 duration-200 grid place-content-center hover:animate-spin transition-all hover:shadow-inner bg-[#4E929D] rounded-full'>
                <Close />
            </button>
        </div>

    </div> : <></>
}
export default function PrescriptionsManagement() {

    const [prescriptions, setPrescriptions] = useState<IPrescriptionItem[]>([]);
    const [loading, setLoading] = useState(false);

    const [keyword, setKeyword] = useState<string>('');
    const getSearchResults = () => {
        ///api/search/assay?page=21
        if (keyword.trim().length < 1) return;
        //setLoading(true);
        request.post(`/search/prescriptions?page=${page}`, {
            key: keyword
        }).then((resp) => {
            //setLoading(false);
            console.log("GEELDI");
            console.log(resp.data);
            setPrescriptions(resp.data);
            setPage(page)
        }).catch((err) => {
            //   setLoading(false);
            console.log(err);
        })
    }
    const [page, setPage] = useState(1)

    const fetchPrescriptions = () => {
        setLoading(true);
        request.get(`/userprescriptions?page=${page}`).then((resp) => {
            setLoading(false);
            console.log("GEELDI");
            console.log(resp.data);
            setPrescriptions(resp.data);
            setPage(page)
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }

    const refresh = () => {
        if (keyword.trim().length > 0) {
            getSearchResults();
        } else {
            fetchPrescriptions();
        }
    }

    useEffect(() => {
        refresh()
    }, [page, keyword])

    const [newPrespriptionModal, setNewPrespriptionModal] = useState<INewPrespriptionModal>({
        open: false,
        data: {
            Name: '',
            UserId: 'dadada',
            Description: '',
            File: null
        }
    });



    return <DashboardLayout>
        {loading && <LocalLoading message='Reçeteler getiriliyor...' />}
        <NewPrespriptionModal finishEvent={() => {
            setNewPrespriptionModal({
                open: false,
                data: {
                    Name: '',
                    UserId: '',
                    Description: '',
                    File: null
                }
            })
            fetchPrescriptions();
        }
        } data={newPrespriptionModal} setter={setNewPrespriptionModal} />
        <div className=" md:min-h-[798px] flex flex-col  rounded-[30px_5px] bg-[transparent]">
            <div className="w-full flex  text-start items-center justify-between  py-[26px] px-[10px]">
                <div className="flex flex-col justify-between w-full">
                    <Text type="h3" className="text-[#4D5628] !text-[20px] w-full">Reçeteler</Text>
                    <Text type="h3" className="text-[#4D5628] font-nexa-light !text-[14px] w-full">Hastalarınıza ait reçeteleri yönetin.</Text>
                </div>
                <div>
                    <button onClick={() => {
                        setNewPrespriptionModal({
                            ...newPrespriptionModal,
                            open: true
                        })
                    }} className='text-[white] text-[14px] bg-[#4E929D] w-[160px] h-[48px] rounded-[20px_5px]'>
                        <Add />
                        <span>
                            Reçete Oluştur
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-[80%] gap-[10px] mt-[10px] mb-[30px] flex">
                <input type="text" value={keyword} onChange={
                    (e) => { setKeyword(e.currentTarget.value) }
                } placeholder='Ad Soyad ile arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button onClick={() => {
                    refresh()
                }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
            {prescriptions?.length > 0 ? <>
                <div className="w-full flex flex-col">
                    <div className='w-full flex justify-evenly border-2 h-[62px] p-3 bg-[#f5f5f5] items-center text-start'>
                        <Text type="h3" className="text-secondary flex-[6] !text-[14px]">Ad Soyad</Text>
                        <Text type="h3" className="text-secondary flex-[6] !text-[14px]">E-posta</Text>
                        <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Telefon</Text>
                        <Text type="h3" className="text-secondary flex-[4] !text-[14px]">Reçete Tarih</Text>
                        <div className='flex-[4]'>  </div>
                    </div>
                    <div className='w-full border-2'>
                        {
                            prescriptions?.length > 0 ? (prescriptions?.map((item) => {
                                return <Row key={v4()} refresh={refresh} data={item} />
                            }) || <></>) : <h1 className='text-[#4D5628] text-[20px] text-center'>Reçeteniz bulunmamaktadır</h1>
                        }
                    </div>
                </div>
                <Pagination siblingCount={3} variant="text" className="mt-auto mx-auto mb-[30px]" onChange={(e: any, value: number) => {
                    setPage(value)
                }} count={prescriptions.length > 0 ? page + 1 : page} />
            </> : <h1 className='text-center p-2 text-[18px] font-nexa-bold'> Reçete bulunmamaktadır </h1>}
        </div>
    </DashboardLayout>
}