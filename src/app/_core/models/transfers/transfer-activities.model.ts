interface TransferActivities {
    customerNo: number;
    transactions: Transaction[];
  }

  interface Transaction {
    sourceBranchCode: string;
    sourceCustomerNumber: string;
    sourceExtensionNumber: string;
    amount: string;
    currency: string;
    destinationBankName: string;
    destinationBankCode: string;
    destinationBranchCode: string;
    destinationCustomerNumber: string;
    destinationExtensionNumber: string;
    ibanNumber: string;
    destinationCreditCardNumber: string;
    destinationGsmNumber: string;
    receiverName: string;
    transactionCode: string;
    date: string;
    explanation: string;
    transferReason?: string;
    destinationShadowCardNumber: string;
  }
