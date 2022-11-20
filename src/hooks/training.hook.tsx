import { useDispatch, useSelector } from "react-redux";
import { selectTraining, setLoadingMessage as _setLoadingMessage, TrainingSliceProps, getAdminTrainings as _getAdminTrainings, getTrainingById as _getTrainingById, deleteTrainingById as _deleteTrainingById } from "src/app/Training/training.slice";
import { } from "src/app/Training/training.types";


const useTraining = () => {
    const dispatch = useDispatch<any>();
    const training: TrainingSliceProps = useSelector(selectTraining);

    const refetchAdminTrainings = (page: number) => {
        dispatch(_getAdminTrainings(page));
    }

    const getTrainingById = (id: string) => {
        dispatch(_getTrainingById(id));
    }

    const deleteTrainingById = (id: string) => {
        dispatch(_deleteTrainingById(id));
    }

    return {
        loadingProcess: training.createTrainingProcess,
        refetchAdminTrainings,
        adminTrainings: training.adminTrainings,
        getTrainingById,
        oneTraining: training.oneTraining,
        deleteTrainingById,
        deleteTrainingProcess: training.deleteTrainingProcess
    }
}

export default useTraining;
