/** @jsxImportSource @emotion/react */
import { FormLabel, Slider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';
import {
  SPICINESS_COLOR_SCALE,
  SPICINESS_DEFAULT_VALUE,
} from '../../utils/colorScale';
import { Dish } from '../../definitions/types';
import { formLabel } from '../Dish.module.style';

const SpicinessField = () => {
  const { control } = useFormContext<Dish>();
  const [sliderValue, setSliderValue] = useState<number | number[]>(
    SPICINESS_DEFAULT_VALUE
  );

  const onSliderValueChange = (
    e: any,
    nativeHandle: (...event: any[]) => void
  ) => {
    nativeHandle(e);
    setSliderValue(e.target.value);
  };

  return (
    <Controller
      name="spiciness"
      defaultValue={SPICINESS_DEFAULT_VALUE}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <>
          <div css={formLabel}>
            <FormLabel error={!!error}>Spiciness</FormLabel>
          </div>
          <Slider
            color="primary"
            valueLabelDisplay="auto"
            step={1}
            max={10}
            marks
            value={sliderValue}
            onChange={(e: Event) => onSliderValueChange(e, onChange)}
            sx={{
              color: getColor(sliderValue),
            }}
          />
        </>
      )}
    />
  );
};

const getColor = (value: number | number[]): string => {
  return typeof value === 'number'
    ? SPICINESS_COLOR_SCALE[value]
    : SPICINESS_COLOR_SCALE[value[0]];
};

export default SpicinessField;
