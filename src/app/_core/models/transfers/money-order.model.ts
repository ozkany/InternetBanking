export interface MoneyOrderRequest {
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  explanation: string;
  transactionDate: string;
}

export interface MoneyOrderResponse {
  type: string;
  isBaseControl: boolean;
  message?: any;
  receiptId?: any;
  summaries: MoneyOrderResponseSummary[];
  contracts?: any;
  payments?: any;
  menus?: any;
  warningMessage: any[];
  token: string;
  eTag: string;
  controlData?: any;
}

export interface MoneyOrderResponseSummary {
  groupName: string;
  label: string;
  value: string;
  order: number;
  groupOrder: number;
  key: string;
  items?: any;
}