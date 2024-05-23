import React from "react";

import { TextField, InputAdornment } from "@mui/material";

interface IconTextFieldProps {
  props: any;
}
const IconTextField: React.FC<IconTextFieldProps> = ({ props }) => {
  const { iconStart, iconEnd, InputProps } = props;

  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};

export default IconTextField;
