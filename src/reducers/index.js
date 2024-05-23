// src/reducers/index.js
const initialState = {
  basicDetails: {
    heartRate: 60,
    higherBp: 125,
    lowerBp: 60,
    name: "",
    dob: undefined,
    gender: undefined,
  },
};

const counterReducer = (state = initialState, action) => {
  return state;
};

export default counterReducer;
