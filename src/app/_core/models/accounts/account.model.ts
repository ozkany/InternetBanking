export interface CustomerAccount {
    id: string;
    iban: string;
    availableBalance: number;
    balance: number;
    name: string;
    number: string;
    formattedNumber: string;
    type: string;
    currencyCode: string;
    maturityDate: string;
    maturityAmount: number;
    branchName: string;
    isAutoInvestment: boolean;
    remainingDay: number;
    originalProductType: string;
    originalProductCode: string;
    projectCode: string;
}

export interface AccountsRootObject {
    accounts: CustomerAccount[];
}

export type CustomerAccountThin = Pick<CustomerAccount, 'id' | 'iban' | 'formattedNumber'>;
