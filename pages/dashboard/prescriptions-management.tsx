import DashboardLayout from '@components/Layouts/DashboardLayout'
import Text from '@components/Text';
import { Add, ArrowDropDown, ArrowDropUp, Cancel, Close, RefreshRounded, SortByAlpha } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import DocumentsUpload from '@components/Upload/DocumentsUpload';
import { Pagination } from '@mui/material'
import FormInput, { FormInputTextArea } from '@components/Forms/FormInput/FormInput';
import classNames from 'classnames';
import { v4 } from 'uuid';
import { UserInformation, UserState } from '@app/User/user.types';
import request from '@config';
import { LocalLoading } from './appointment-management';
interface IPrescriptionItem {
    Id: string;
    UserId: string;
    Link: string;
    Description: string;
    created_at: string;
    updated_at: string;
    Name: string;
    user: null | UserState;
}
const Row = ({ data }: { data: IPrescriptionItem }) => {
    return <div className='flex flex-col w-full'>
        <div className='w-full flex p-3 border-t-[1px]'>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.Information?.Fullname || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[6]'>
                <p>
                    {
                        data.user?.Email || 'YOK'
                    }

                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        data.user?.Information?.Phone || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <p>
                    {
                        new Date(data.updated_at || data.created_at).toLocaleDateString() || 'YOK'
                    }
                </p>
            </div>
            <div className='flex-[4]'>
                <button onClick={() => {
                    window.open(data.Link, "_blank")
                }} className='flex justify-around items-center font-nexa-bold bg-[#EBF3F4] w-[97px] h-[30px] text-[#4E929D]'>
                    <span>Görüntüle</span>
                </button>
            </div>
        </div>
    </div>
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

    const handleSearchPatient = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setSearchKey(e.currentTarget.value);
    }

    const searchPatient = (key: string) => {
        request.post(`/search/user`, {
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

    const handleCreatePrescription = () => {
        console.log(data);
        let formData = new FormData();
        formData.append('Name', data.data.Name);
        formData.append('UserId', data.data.UserId);
        formData.append('Description', data.data.Description);
        formData.append('File', data.data.File![0]);
        request.post('/userprescriptions', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log("EKLENDI", res);
            setSelectedPatient(null);
        }).catch(err => {
            console.log("EKLENEMEDI ", err);
            setSelectedPatient(null);
        })
        finishEvent();
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

    const [valid, setValid] = useState(false);

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

    interface IPagination {
        page: number;
        per_page: number;
        prev_page_url: string | null;
        next_page_url: string | null;
        last_page: number;
    }
    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        per_page: 10,
        prev_page_url: null,
        next_page_url: null,
        last_page: 1
    })

    const fetchPrescriptions = (page = 1) => {
        setLoading(true);
        request.get(`/userprescriptions?page=${page}`).then((resp) => {
            setLoading(false);
            console.log("GEELDI");

            console.log(resp.data);
            setPrescriptions(resp.data);
            setPagination({
                page: resp.data.current_page,
                per_page: resp.data.per_page,
                prev_page_url: resp.data.prev_page_url,
                next_page_url: resp.data.next_page_url,
                last_page: resp.data.last_page
            })
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(() => {
        fetchPrescriptions();
    }, [])

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
            fetchPrescriptions(pagination.page)}
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
                <input type="text" placeholder='Ad Soyad ya da E-posta adresine göre arayın' className='bg-[#D4E5E8] rounded-[20px_5px] w-full pl-[15px]' />
                <button onClick={() => {
                    fetchPrescriptions();
                }} className='bg-[#EBF3F4] rounded-[20px_5px] w-[60px]'>
                    <RefreshRounded />
                </button>
            </div>
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
                        prescriptions?.map((item) => {
                            return <Row key={v4()} data={item} />
                        }) || <></>
                    }
                </div>
            </div>
            <Pagination siblingCount={3} variant="text" className="mt-auto mb-[30px]" onChange={(e: any, value: number) => {
                fetchPrescriptions(value);
            }} count={pagination.last_page} />
        </div>
    </DashboardLayout>
}