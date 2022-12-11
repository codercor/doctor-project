import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useTraining from 'src/hooks/training.hook';
import { TrainingDataType } from '@app/Training/training.types';
import { gapi } from 'gapi-script'
import axios from 'axios';
import useDrivePicker from 'react-google-drive-picker'
import Button from '@components/Button';

export default function SelectDriveItem({ setSelectedDriveItemId, isActive }: {
    setSelectedDriveItemId: (id: string) => void,
    isActive: boolean
}) {
    const [openPicker, authResponse] = useDrivePicker();


    const handleOpenPicker = () => {
        openPicker({
            clientId: "88309483258-vjvt7ofrbe2l8uk63vb1rgcgjadj9ufq.apps.googleusercontent.com",
            developerKey: "AIzaSyDG7-kURnNfgH4L4TZRpUh2juPSypOkm8Q",
            viewId: "DOCS_VIDEOS",
            // token: token, // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            setSelectFolderEnabled: true,
            // customViews: customViewsArray, // custom view
            callbackFunction: (data) => {
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button')
                }
                console.log(data)
                if (data.action === 'picked') {
                    const { docs } = data;
                    setSelectedDriveItemId(docs[0].id)
                }
            }
        })
    }

    return (
        <Button disabled={!isActive} type="quaternary-flat" onClick={handleOpenPicker} className='h-fit'> Klasör Seç </Button>
    );
} 