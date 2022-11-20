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
    }
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