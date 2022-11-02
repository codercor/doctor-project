export interface UserState {
    Id: string;
    IsAdmin: boolean;
    IsAuthenticated: boolean;
    Email: string;
    AuthProcess:{
        IsLoading: boolean;
        IsError: boolean;
        ErrorMessage: string;
    }
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
