import { TrainingDocumentationType } from "@app/Training/training.types";

export interface UserState {
    Id: string;
    IsAdmin: boolean;
    IsAuthenticated: boolean;
    Email: string;
    IsPatient: boolean;
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
        Gender?: string;
        BirthDate?: string;
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
    orderHistory?: Array<OrderHistoyItem>;
    getOrderHistoryProcess: {
        IsLoading: boolean;
        IsError: boolean;
    },
}

export interface OrderHistoyItem {
    Id: string;
    Detail: {
        Id: string;
        PurchaseId: string;
        EInvoiceLink: string | null;
        Price: string;
    },
    Date: string;
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
    Id: string,
    Fullname: string,
    Phone: string,
    Address: string,
    Email: string,
    Gender?: string,
    BirthDate?: string,
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