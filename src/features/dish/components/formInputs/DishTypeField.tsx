import { Controller, useFormContext } from 'react-hook-form';
import { Dish } from '../../definitions/types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const DishTypeField = () => {
  const { control } = useFormContext<Dish>();
  return (
    <Controller
      name="type"
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth size="small" error={!!error}>
          <InputLabel id="dish-type-select">Dish Type</InputLabel>
          <Select
            error={!!error}
            labelId="dish-type-select"
            id="demo-select-small"
            value={value}
            label="Dish Type"
            onChange={onChange}
          >
            <MenuItem value={'Pizza'}>Pizza</MenuItem>
            <MenuItem value={'Sandwich'}>Sandwich</MenuItem>
            <MenuItem value={'Soup'}>Soup</MenuItem>
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default DishTypeField;
