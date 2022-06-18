import { Controller, useFormContext } from 'react-hook-form';
import { Dish } from '../types';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

export const DishTypeField = () => {
  const { control } = useFormContext<Dish>();
  return (
    <Controller
      name="type"
      defaultValue={{ numSlices: 3 }}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="soup" control={<Radio />} label="Soup" />
            <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
            <FormControlLabel
              value="sandwich"
              control={<Radio />}
              label="Sandwich"
            />
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
