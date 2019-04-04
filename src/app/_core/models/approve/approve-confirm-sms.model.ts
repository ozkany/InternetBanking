interface ApproveConfirmSms {
  type: string;
  isBaseControl: boolean;
  message: string;
  receiptId?: any;
  summaries: any[];
  contracts?: any;
  payments?: any;
  menus?: any;
  warningMessage?: any;
  token: string;
  eTag: string;
  controlData?: any;
}
