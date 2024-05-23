import React, { useCallback, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";

import { Typography, Card, Button, TextField, Tabs, Tab } from "@mui/material";

import { setBodyWeightData } from "../../../slices/UserDataSlice";
import DetailsHeading from "../../molecules/DetailsHeading";

const BodyWeight: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [weightDetails, setWeightDetails] = useState({
    type: "lbs",
    lbs: 110,
    kg: 49,
  });

  const isLbs = useCallback(
    (type?: any) => {
      return type ? type === "lbs" : weightDetails.type === "lbs";
    },
    [weightDetails.type]
  );

  const handleChange = (event: any, type?: any) => {
    const inputValue = event?.target?.value;

    if (type) {
      setWeightDetails({
        ...weightDetails,
        type,
      });
      return;
    }
    setWeightDetails({
      ...weightDetails,
      lbs: isLbs() ? inputValue : Math.ceil(2.2 * inputValue),
      kg: isLbs() ? Math.ceil(0.4 * inputValue) : inputValue,
    });
  };

  const hasError = useCallback(() => {
    const lbsError = weightDetails.lbs <= 0;
    const kgError = weightDetails.kg <= 0;
    return lbsError && kgError;
  }, [weightDetails]);

  const navigateToNextPage = useCallback(() => {
    if (hasError()) {
      return false;
    }
    dispatch(setBodyWeightData(weightDetails));
    navigate("/age");
  }, [dispatch, hasError, navigate, weightDetails]);

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading />

      <div className="flex flex-col w-full mb-4">
        <Typography variant="h6" align="left" className="mb-6 font-bold">
          What is your weight ?
        </Typography>
        <Tabs
          value={weightDetails.type}
          onChange={handleChange}
          className="mb-4"
        >
          <Tab label="Lbs" value="lbs" />
          <Tab label="Kg" value="kg" />
        </Tabs>
        <TextField
          id="standard-basic"
          type="number"
          label="Please enter your weight"
          placeholder="Please enter your weight"
          value={isLbs() ? weightDetails.lbs : weightDetails.kg}
          onChange={handleChange}
          InputProps={{
            error: hasError(),
          }}
        />
      </div>

      <Button
        variant="contained"
        className="w-full mb-4 my-2"
        size="large"
        onClick={navigateToNextPage}
        disabled={hasError()}
      >
        Next
      </Button>
    </Card>
  );
};

export default BodyWeight;
