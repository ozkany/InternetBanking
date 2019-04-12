export interface LastPaymentsDetail {
    id: string;
    subscriberNumber: string;
    paymentAmount: number;
    paymentDate: Date;
    associationCode: string;
    currency: string;
    associationName: string;
    paymentTypeCode: string;
    isApplicationSupported: boolean;
}

export interface PaymentActivityRootObject {
    lastPaymentsDetails: LastPaymentsDetail[];
}
