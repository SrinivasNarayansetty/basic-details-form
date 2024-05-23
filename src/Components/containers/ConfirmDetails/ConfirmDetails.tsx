import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { Typography, Card, Button } from "@mui/material";

import { useUserData } from "../../../slices/UserDataSlice";
import DetailsHeading from "../../molecules/DetailsHeading";

const BodyWeight: React.FC = () => {
  const navigate = useNavigate();

  const { basicData, bodyWeight, age, message } = useUserData();

  const onEdit = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const navigateToNextPage = useCallback(() => {
    const body = {
      ...basicData,
      weight: `${bodyWeight.kg} Kgs`,
      age: `${age} years`,
      message,
    }

    axios({
      method: 'post',
      url: 'https://jivi-assignment.free.beeceptor.com/submit/basic-details',
      headers: {}, 
      data: body
    }).then((res) => {
      if(res.data.success) {
        toast.success("Submitted successfully", { onClose: () => {
           navigate("/success-screen");
           return;
        }});
      } else {
        toast.error("Something went wrong");
        return;
      }
     
    })
  }, [navigate]);

  const getDataStatement = useCallback(
    (label: string, value?: string | number) => {
      return (
        <Typography
          variant="body1"
          align="left"
          className="mb-3 font-bold"
          component="span"
        >
          <>
            <span className="font-bold mr-2">{label}</span>
            {value && <span className="font-normal">{value}</span>}
          </>
        </Typography>
      );
    },
    []
  );

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading title="Preview" />

      <div className="flex flex-col w-full mb-4 items-left">
        <Typography variant="body1" align="left" className="mb-6 font-bold">
          Please confirm your details to continue.
        </Typography>
        {getDataStatement("Heart Rate:", `${basicData.heartRate} bpm`)}
        {getDataStatement("Blood Pressure:")}
        {getDataStatement("Systolic:", `${basicData.higherBp} mmHg`)}
        {getDataStatement("Diastolic:", `${basicData.lowerBp} mmHg`)}
        {getDataStatement("Name:", basicData.name)}
        {getDataStatement("Date of birth:", basicData.dob)}
        {getDataStatement("Age:", age)}
        {getDataStatement("Gender:", basicData.gender)}
        {getDataStatement("Body Weight:", `${bodyWeight.kg} Kgs`)}
        {getDataStatement("Message:", message)}
      </div>

      <div className="flex flex-auto">
        <Button
          variant="outlined"
          className="w-full mb-4 my-2 mr-2 color-grey"
          size="large"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          className="w-full mb-4 my-2"
          size="large"
          onClick={navigateToNextPage}
        >
          Submit
        </Button>
      </div>
    </Card>
  );
};

export default BodyWeight;
