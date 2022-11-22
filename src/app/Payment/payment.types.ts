import { TrainingDataType } from "@app/Training/training.types";

export interface PaymentCredentials {
    EducationId: string,
    UserId: string,
    CardHolderName: string,
    CardNumber: string,
    ExpireMonth: string,
    ExpireYear: string,
    Cvc: string,
}
export interface PaymentState {
    paymentProcess: {
        loading: boolean,
        error: null | string,
    },
    htmlContent: string | null,
    paymentCredentials: PaymentCredentials | null,

}

