export interface CreditCardList {
    guid: string;
    ownerName: string;
    name: string;
    image: string;
    maskedCardNumber: string;
    statementDate: string;
    lastPaymentDate: string;
    remainingDebt: string;
    remainingDebtUsd: string;
    availableLimit: string;
    swipeButtons: string[];
    isCancelled: boolean;
    remainingDebtDomestic: number;
    remainingDebtForeign: number;
    totalSpendingDomestic: number;
    totalSpendingForeign: number;
}

export interface CreditCardListResponse {
    canApply: boolean;
    isVisible: boolean;
    order: number;
    creditCardList: CreditCardList[];
}

export interface ExtendCreditCardList {
    guid: string;
    ownerName: string;
    name: string;
    image: string;
    maskedCardNumber: string;
    statementDate: string;
    lastPaymentDate: string;
    remainingDebt: string;
    remainingDebtUsd: string;
    availableLimit: string;
    swipeButtons: string[];
    isCancelled: boolean;
    remainingDebtDomestic: number;
    remainingDebtForeign: number;
    totalSpendingDomestic: number;
    totalSpendingForeign: number;
}

export interface ExtendCardListResponse {
    canApply: boolean;
    isVisible: boolean;
    order: number;
    extendCreditCardList: ExtendCreditCardList[];
}

export interface VirtualCardList {
    guid: string;
    name: string;
    image: string;
    clearCardNumber: string;
    expiryDate: string;
    cvv2: string;
    availableLimit: string;
    swipeButtons: string[];
}

export interface VirtualCardListResponse {
    canApply: boolean;
    isVisible: boolean;
    order: number;
    virtualCardList: VirtualCardList[];
}

export interface DebitCardListResponse {
    canApply: boolean;
    isVisible: boolean;
    order: number;
    debitCardList: any[];
}

export interface GetCardListRootResponse {
    creditCardListResponse: CreditCardListResponse;
    extendCardListResponse: ExtendCardListResponse;
    virtualCardListResponse: VirtualCardListResponse;
    debitCardListResponse: DebitCardListResponse;
}

