/** @jsxImportSource @emotion/react */
import { FormLabel, Slider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { COLOR_SCALE } from '../utils/ColorScale';
import { Dish } from '../types';
import { formLabel } from '../Dish.module.style';

const SpicinessField = () => {
  const { control } = useFormContext<Dish>();
  const [sliderValue, setSliderValue] = useState<number | number[]>(5);

  //TODO: refactor this hsit
  const onSliderChange = (e: any, func: any) => {
    func(e);
    setSliderValue(e.target.value);
  };

  return (
    <Controller
      name="spiciness"
      control={control}
      defaultValue=""
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
            onChange={(e) => onSliderChange(e, onChange)}
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
  return typeof value === 'number' ? COLOR_SCALE[value] : COLOR_SCALE[value[0]];
};

export default SpicinessField;
