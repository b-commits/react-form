/** @jsxImportSource @emotion/react */
import { Controller, useFormContext } from 'react-hook-form';
import { typeField } from '../Dish.module.style';
import { Dish, DishTypes } from '../../definitions/types';
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
      defaultValue={DishTypes.NOT_SET}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth size="small" error={!!error}>
          <InputLabel id="dish-type-select">Dish Type</InputLabel>
          <div css={typeField}>
            <Select
              css={typeField}
              error={!!error}
              labelId="dish-type-select"
              value={value}
              label="Dish Type"
              onChange={onChange}
            >
              <MenuItem value={DishTypes.PIZZA}>Pizza</MenuItem>
              <MenuItem value={DishTypes.SANDWICH}>Sandwich</MenuItem>
              <MenuItem value={DishTypes.SOUP}>Soup</MenuItem>
            </Select>
          </div>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default DishTypeField;
