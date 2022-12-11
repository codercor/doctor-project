import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useTraining from 'src/hooks/training.hook';
import { TrainingDataType } from '@app/Training/training.types';

export default function SelectTraining({ selectedTrainingId, handleChange }: {
    selectedTrainingId: string,
    handleChange: (event: any) => void
}) {
    const [trainings, setTrainings] = React.useState<TrainingDataType[]>([])
    const [page, setPage] = React.useState(1)
    const { adminTrainings, refetchAdminTrainings, loadingProcess } = useTraining()
    React.useEffect(() => {
        if (adminTrainings.length > 0 && trainings.findIndex((training) => training.Id === adminTrainings[0].Id) === -1) {
            setTrainings([...trainings, ...adminTrainings])
            setPage(page + 1)
        }
    }, [adminTrainings])


    React.useEffect(() => {
        refetchAdminTrainings(page)
    }, [page])


    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Eğitim</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectedTrainingId}
                label="Eğitim"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Seçilmedi</em>
                </MenuItem>
                {
                    trainings.map((training) => {
                        return (
                            <MenuItem key={training.Id} value={training.Id}>{training.Name}</MenuItem>
                        )
                    })
                }
            </Select>
            <FormHelperText>Drive klasörünüz ile eşleştirmek için bir eğitim seçin</FormHelperText>
        </FormControl>
    );
} 