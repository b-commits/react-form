/** @jsxImportSource @emotion/react */
import { FormLabel, Slider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { SPICINESS_COLOR_SCALE } from '../../utils/ColorScale';
import { Dish } from '../../definitions/types';
import { formLabel } from '../Dish.module.style';

const SpicinessField = () => {
  const { control } = useFormContext<Dish>();
  const [sliderValue, setSliderValue] = useState<number | number[]>(5);

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
      defaultValue={5}
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
              marginTop: '0px !important',
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
