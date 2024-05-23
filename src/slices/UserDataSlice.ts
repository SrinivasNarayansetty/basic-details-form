import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { UserDetailsType, IDispatcherType, WeightType } from "../types";

const INITIAL_STATE = {
  basicData: {
    heartRate: 60,
    higherBp: 125,
    lowerBp: 60,
    name: "",
    dob: undefined,
    gender: undefined,
  },
  bodyWeight: {
    type: "lbs",
    lbs: 110,
    kg: 49,
  },
  age: 18,
  message: "",
};

type IUserData = typeof INITIAL_STATE;

const UserDataSlice = createSlice({
  name: "userData",
  initialState: INITIAL_STATE,
  reducers: {
    SET_BASIC_DETAILS: (state, action) => {
      state.basicData = action.payload;
    },
    SET_BODY_WEIGHT_DETAILS: (state, action) => {
      state.bodyWeight = action.payload;
    },
    SET_AGE_DETAILS: (state, action) => {
      state.age = action.payload;
    },
    SET_MESSAGE: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const setBasicData =
  (data: UserDetailsType) =>
  async (dispatch: IDispatcherType): Promise<void> => {
    await dispatch(UserDataSlice.actions.SET_BASIC_DETAILS(data));
    return;
  };

export const setBodyWeightData =
  (data: WeightType) =>
  async (dispatch: IDispatcherType): Promise<void> => {
    await dispatch(UserDataSlice.actions.SET_BODY_WEIGHT_DETAILS(data));
    return;
  };

export const setAgeDetails =
  (data: number) =>
  async (dispatch: IDispatcherType): Promise<void> => {
    await dispatch(UserDataSlice.actions.SET_AGE_DETAILS(data));
    return;
  };

export const setRecordedMessage =
  (message: string) =>
  async (dispatch: IDispatcherType): Promise<void> => {
    await dispatch(UserDataSlice.actions.SET_MESSAGE(message));
    return;
  };

export interface ISampleStates {
  [UserDataSlice.name]: ReturnType<typeof UserDataSlice.reducer>;
}

export const UserDataSelector = (state: ISampleStates): IUserData => {
  return state[UserDataSlice.name];
};

export const useUserData = (): IUserData => useSelector(UserDataSelector);

export default UserDataSlice;
