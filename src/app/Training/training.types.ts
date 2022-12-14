
export interface TrainingBranchType {
    Order: number;
    Content: string;
    StartDate: string;
    Time: number;
}

export interface TrainingDocumentationType {
    Id: string;
    EducationId: string;
    Link: string;
}

export type TrainingDataType = {
    Id?: string;
    Name: string;
    Details: string;
    DiscountRate: number;
    Price: number;
    Image?: string | null;
    GeneralDetail: {
        StartDate: string;
        EndDate: string;
        MaxParticipant: number;
        VideoLink: string;
    },
    Videos?: Array<VideoType>;
    EndDate?: string;
    EducationSections: Array<TrainingBranchType>,
    Sections?: Array<TrainingBranchType>,
    Documentations?: Array<TrainingDocumentationType>,
}

export interface VideoType {
    Id: string;
    EducationId: string;
    Link: string;
}

export interface TrainingBranchProps extends TrainingBranchType {
    onChanges?: (data: TrainingBranchType, order: number) => void;
    onDelete?: () => void;
}