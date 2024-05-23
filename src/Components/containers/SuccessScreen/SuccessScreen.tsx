import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Card, Button } from "@mui/material";

import DetailsHeading from "../../molecules/DetailsHeading";

const BodyWeight: React.FC = () => {
  const navigate = useNavigate();

  const submitAgain = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading title="Preview" />

      <div className="flex flex-col w-full mb-4 items-left my-30">
        <Typography variant="body1" align="left" className="mb-6 font-bold">
          Thank you
        </Typography>
        <Typography variant="body1" align="left" className="mb-6 font-normal">
          Your details are saved successfully.
        </Typography>
      </div>

      <Button
        variant="contained"
        className="w-full mb-4 my-2"
        size="large"
        onClick={submitAgain}
      >
        Submit Again
      </Button>
    </Card>
  );
};

export default BodyWeight;
