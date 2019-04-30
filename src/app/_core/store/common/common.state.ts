export interface State {
  effectError: {  detail: any, location: string };
  globalError: any;
}

export const initialState: State = {
  effectError: null,
  globalError: null
};
