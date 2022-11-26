import { TrainingDocumentationType } from "@app/Training/training.types";

export interface UserState {
    Id: string;
    IsAdmin: boolean;
    IsAuthenticated: boolean;
    Email: string;
    ParasutId: string | null;
    AuthProcess: {
        IsLoading: boolean;
        IsError: boolean;
        ErrorMessage: string;
    },
    UserProcess: {
        IsLoading: boolean,
        IsError: boolean,
        ErrorMessage: string | null
    },
    Token: string | null;
    Information: {
        Id: string;
        Fullname: string;
        Phone: string;
        Address: string;
    };
    BillingDetail: {
        Id: string;
        Name: string;
        Surname: string;
        Email: string;
        IdentityNumber: string;
        RegistrationAddress: string;
        City: string;
        Country: string;
    },
    UsersTrainings: Array<BoughtTraining>;
    UsersTrainingsProcess: {
        IsLoading: boolean;
    },
    UpdateHomePageProcess: {
        IsLoading: boolean;
        IsError: boolean;
    },
}

export interface UserCredentials {
    Email: string;
    Password: string;
}
export interface UserRegisterCredentials {
    Email: string;
    Password: string;
    ConfirmPassword: string;
}

export type UserInformation = {
    Fullname: string,
    Phone: string,
    Address: string,
    Email: string
}
export type BannerData = {
    Title: string,
    Description: string,
    Image: string | File,
}

export type UserBillingDetail = {
    Id: string,
    Name: string,
    Surname: string,
    Email: string,
    IdentityNumber: string,
    RegistrationAddress: string,
    City: string,
    Country: string
}
export interface BoughtTrainingEducationSection {
    Id: string,
    Order: number | string,
    Content: string,
    ZoomUrl: string,
    Password: string,
}

export type BoughtTraining = {
    Id: string,
    Name: string,
    Details: string,
    Price: string | number,
    Image: string,
    GeneralDetail: {
        Id: string,
        StartDate: string,
        EndDate: string,
        AccessEndDate: string,
        VideoLink: string,
    },
    EducationSections: Array<BoughtTrainingEducationSection & { ZoomURL: string }>,
    Documentation: Array<TrainingDocumentationType>
}