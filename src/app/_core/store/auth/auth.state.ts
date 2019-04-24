import { AuthTokenObj } from '@core/models/auth/auth-token.model';
import { User } from '@core/models/auth/user.model';

export interface State {
  tokenStr: string;
  authTokenObj: AuthTokenObj;
  user: User;
  otpObj: Object;
  authenticated: boolean;
  loginStep: number;
}

export const initialState: State = {
  tokenStr: null,
  authTokenObj: null,
  user: null,
  otpObj: null,
  authenticated: false,
  loginStep: 1
};
