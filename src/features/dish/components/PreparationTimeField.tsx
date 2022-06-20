import { Controller, useFormContext } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { TextField, TextFieldProps } from '@mui/material';
import { Dish } from '../types';
import { FieldInputProps } from './FieldInputProps';

const PreparationTimeField = ({ name, label }: FieldInputProps) => {
  const { control } = useFormContext<Dish>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <NumberFormat
          onChange={onChange}
          value={value}
          helperText={error ? error.message : ''}
          error={!!error}
          label={label}
          customInput={PreparedTextField}
          format={cardExpiry}
          mask="_"
        />
      )}
    />
  );
};

const PreparedTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      placeholder="01:25:00"
      size="small"
      fullWidth
      variant="outlined"
    />
  );
};

function limit(val: any, max: any) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

function cardExpiry(val: any) {
  let hours = limit(val.substring(0, 2), '99');
  let minutes = limit(val.substring(2, 4), '59');
  let seconds = limit(val.substring(4, 6), '59');

  return hours + ':' + minutes + (seconds.length ? ':' + seconds : '');
}

export default PreparationTimeField;
