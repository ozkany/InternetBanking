export interface State {
  effectError: {  detail: any, location: string };
}

export const initialState: State = {
  effectError: null
};
