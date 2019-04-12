export interface SoftToken {
    userId: string;
    key: string;
}

export interface MetaList {
    IsBalanceShownOnDashboard: string;
}

export interface CustomerMeta {
    metaList: MetaList;
}

export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    userId: string;
    verificationType: string;
    authenticatorType: string;
    eMail: string;
    firmName: string;
    customerType: string;
    profileImageUrl: string;
    changePassword: boolean;
    softToken: SoftToken;
    customerMeta: CustomerMeta;
    hasActiveSession: boolean;
}
