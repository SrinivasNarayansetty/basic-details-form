import React, { useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";

import { Typography, Card, Button, TextField } from "@mui/material";

import { setAgeDetails } from "../../../slices/UserDataSlice";
import DetailsHeading from "../../molecules/DetailsHeading";

const BodyWeight: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [age, setAge] = useState(18);

  const handleChange = (event: any, type?: any) => {
    const inputValue = event?.target?.value;
    setAge(inputValue);
  };

  const ageError = useMemo(() => {
    return age <= 0 || isNaN(age) || age > 100;
  }, [age]);

  const navigateToNextPage = useCallback(() => {
    dispatch(setAgeDetails(age));
    navigate("/voice-message");
  }, [age, dispatch, navigate]);

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading />

      <div className="flex flex-col w-full mb-4">
        <Typography variant="h6" align="left" className="mb-6 font-bold">
          What is your Age ?
        </Typography>
        <TextField
          id="standard-basic"
          type="number"
          label="Please enter your age"
          placeholder="Please enter your age"
          value={age}
          onChange={handleChange}
          InputProps={{
            error: ageError,
          }}
        />
      </div>

      <Button
        variant="contained"
        className="w-full mb-4 my-2"
        size="large"
        onClick={navigateToNextPage}
        disabled={ageError}
      >
        Next
      </Button>
    </Card>
  );
};

export default BodyWeight;
