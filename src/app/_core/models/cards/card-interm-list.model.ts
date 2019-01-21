export interface IntermRecordList {
    bonus: number;
    bonusWithCurrency: string;
    transactionCurrency: string;
    currency: string;
    originalCurrency: string;
    provisionNumber: string;
    transactionDate: string;
    transactionName: string;
    transactionType: string;
    transactionAmount: string;
    installmentNumber: number;
    installmentCount: number;
    description: string;
    isSuitableForInstallment: boolean;
    orgTransactionDate: string;
}

export interface SelectedCardIntermRecordList {
    fullName: string;
    cardNumber: string;
    cardType: number;
    productName: string;
    totalSpendingDomestic: string;
    totalSpendingForeign: string;
    guid: string;
    shadowCardNumber: string;
    intermRecordList: IntermRecordList[];
}

export interface ExtendedCardRecordList {
    fullName: string;
    cardNumber: string;
    cardType: number;
    productName: string;
    totalSpendingDomestic: string;
    totalSpendingForeign: string;
    guid: string;
    shadowCardNumber: string;
    intermRecordList: any[];
}

export interface CardIntermListRootObject {
    selectedCardIntermRecordList: SelectedCardIntermRecordList;
    extendedCardRecordList: ExtendedCardRecordList[];
}
