import React, { useCallback, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Card,
  InputAdornment,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";

import Person from "@mui/icons-material/Person";

import SliderComponent from "../../molecules/SliderComponent";
import DetailsHeading from "../../molecules/DetailsHeading";

import { setBasicData } from "../../../slices/UserDataSlice";

import { GenderOptions } from "../../../Utils/Constants";

const BasicDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [basicDetails, setBasicdetails] = useState({
    heartRate: 60,
    higherBp: 125,
    lowerBp: 62,
    name: "",
    dob: undefined,
    gender: undefined,
  });
  const [errorData, setErrorData] = useState({
    name: false,
    dob: false,
    gender: false,
  });

  const handleChange = (event: any, type: any) => {
    const inputValue = event?.target?.value;
    let basicData = basicDetails;
    if (type === "heartRate")
      basicData = { ...basicDetails, heartRate: inputValue };
    if (type === "higherBp")
      basicData = { ...basicDetails, higherBp: inputValue };
    if (type === "lowerBp")
      basicData = { ...basicDetails, lowerBp: inputValue };
    if (type === "name") basicData = { ...basicDetails, name: inputValue };
    if (type === "dob") basicData = { ...basicDetails, dob: inputValue };
    if (type === "gender") basicData = { ...basicDetails, gender: inputValue };
    setBasicdetails(basicData);
  };

  const navigateToNextPage = useCallback(() => {
    const nameError = basicDetails.name.trim().length < 1;
    const dobError = !basicDetails.dob;
    const genderError = !basicDetails.gender;

    setErrorData({ name: nameError, dob: dobError, gender: genderError });

    if (nameError || dobError || genderError) return false;
    dispatch(setBasicData(basicDetails));
    navigate("/weight-details");
  }, [basicDetails, dispatch, navigate]);

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading />
      <SliderComponent
        step={1}
        min={40}
        max={120}
        title="Heart Rate"
        value={basicDetails.heartRate}
        handleChange={(e) => handleChange(e, "heartRate")}
        gridConfig={[40, 60, 80, 100, 120]}
        className="mb-5"
      />
      <SliderComponent
        step={1}
        min={120}
        max={150}
        title="Blood Pressure"
        value={basicDetails.higherBp}
        handleChange={(e) => handleChange(e, "higherBp")}
        gridConfig={[120, 130, 140, 150]}
        className="mb-5"
      />
      <SliderComponent
        step={1}
        min={60}
        max={80}
        value={basicDetails.lowerBp}
        handleChange={(e) => handleChange(e, "lowerBp")}
        gridConfig={[60, 70, 80]}
        className="mb-5"
      />
      <div className="flex flex-col w-full mb-4">
        <Typography variant="subtitle1" align="left" className="mb-2">
          <>
            Name<span className="text-red-700 font-bold">*</span>
          </>
        </Typography>
        <TextField
          id="standard-basic"
          label="Please enter your name"
          placeholder="Please enter your name"
          value={basicDetails.name}
          onChange={(e) => handleChange(e, "name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
            error: errorData.name,
          }}
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <Typography variant="subtitle1" align="left" className="mb-2">
          <>
            Date of Birth <span className="text-red-700 font-bold">*</span>
          </>
        </Typography>
        <TextField
          id="standard-basic"
          label="Date of Birth"
          placeholder="Select Date"
          type="date"
          value={basicDetails.dob}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => handleChange(e, "dob")}
          InputProps={{
            error: errorData.dob,
          }}
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <Typography variant="subtitle1" align="left" className="mb-2">
          <>
            Gender <span className="text-red-700 font-bold">*</span>
          </>
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={basicDetails.gender}
            label="Gender"
            onChange={(e) => handleChange(e, "gender")}
            className="w-full mb-4 text-left"
            error={errorData.gender}
          >
            {GenderOptions.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        onClick={navigateToNextPage}
        className="w-full mb-4 my-2"
        size="large"
      >
        Next
      </Button>
    </Card>
  );
};

export default BasicDetails;
