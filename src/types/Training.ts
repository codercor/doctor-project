
export interface TrainingBranchType {
    Order: number;
    Content: string;
    StartDate: string;
    Time: number;
}
export type TrainingDataType = {
    Id?: string;
    Name: string;
    Details: string;
    DiscountRate: number;
    Price: number;
    GeneralDetail: {
        StartDate: string;
        EndDate: string;
        MaxParticipant: number;
        VideoLink: string;
    },
    EducationSections: Array<TrainingBranchType>
}
export interface TrainingBranchProps extends TrainingBranchType {
    onChanges?: (data: TrainingBranchType, order: number) => void;
    onDelete?: () => void;
}