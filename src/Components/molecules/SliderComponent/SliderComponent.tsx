import React from "react";

import { Slider, Typography, Grid } from "@mui/material";

interface SliderComponentProps {
  step: number;
  min: number;
  max: number;
  value: any;
  handleChange: (event: any, newValue: any) => void;
  title?: string;
  gridConfig?: Array<number>;
  className?: string;
}
const SliderComponent: React.FC<SliderComponentProps> = ({
  step,
  min,
  max,
  value,
  handleChange,
  gridConfig,
  className,
  title,
}) => {
  const getGridConfig = () => {
    if (!gridConfig) return null;
    return (
      <Grid container justifyContent="space-between">
        {gridConfig.map((gridItem) => (
          <Typography variant="subtitle1" key={gridItem}>
            {gridItem}
          </Typography>
        ))}
      </Grid>
    );
  };
  return (
    <div className={className}>
      {title && (
        <Typography variant="subtitle1" align="left">
          {title}
        </Typography>
      )}
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="heart-rate-slider"
        step={step}
        marks
        min={min}
        max={max}
        aria-label={value as string}
        className="py-3"
      />
      {gridConfig && getGridConfig()}
    </div>
  );
};

export default SliderComponent;
