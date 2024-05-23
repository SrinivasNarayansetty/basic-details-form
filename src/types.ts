export type IDispatcherType = any;

export interface UserDetailsType {
  heartRate: number;
  higherBp: number;
  lowerBp: number;
  name: string;
  dob: string | undefined;
  gender: string | undefined;
}

export interface WeightType {
  type: string;
  lbs: number;
  kg: number;
}
