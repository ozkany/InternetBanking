interface ApproveCompletedResponse {
  type: string;
  isBaseControl: boolean;
  message: string;
  receiptId: string;
  summaries: any[];
  contracts?: any;
  payments?: any;
  menus: Menu[];
  warningMessage?: any;
  token: string;
  eTag: string;
  controlData?: any;
}

interface Menu {
  id: number;
  menuKey: number;
  controllerName: string;
  actionName: string;
  title: string;
  menuOrder: number;
  limitedVersionInfo?: any;
}