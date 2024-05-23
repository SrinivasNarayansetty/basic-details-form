import React from "react";

import { Typography, Divider } from "@mui/material";

interface DetailsHeadingProps {
  title?: string;
}

const DetailsHeading: React.FC<DetailsHeadingProps> = ({ title }) => {
  return (
    <>
      <Typography variant="h6" className="mb-2">
        {title || "Details"}
      </Typography>
      <Divider className="my-2" />
    </>
  );
};

export default DetailsHeading;
