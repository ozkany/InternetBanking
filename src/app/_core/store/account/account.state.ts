import { CustomerAccount } from '../../models/accounts/account.model';
import { GetAssetsRootResponse } from '../../models/accounts/assets.model';

export interface State {
  accounts: CustomerAccount[];
  isDirty: boolean;
  selectedAccountId: string;
  accountActivities: Object;
  receipt: Object;
  assets: GetAssetsRootResponse;
}

export const initialState: State = {
  accounts: [],
  isDirty: true,
  selectedAccountId: '',
  accountActivities: null,
  receipt: null,
  assets: null
};
