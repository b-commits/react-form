import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { Dish } from '../../definitions/types';
import FieldInputProps from './FieldInputProps';
import NumberFormat from 'react-number-format';

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
          format={preparationTimeFormat}
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

/**
 *
 * @param inputValue a string representation of the preparation time form input
 * @param limit maximum number of a single section (input seperated by ":")
 * @returns if the value exceeds limit, returns limit
 */
const limitInputValue = (inputValue: string, limit: string): string => {
  return inputValue > limit ? limit : inputValue;
};

/**
 *
 * @param inputValue a string representation of the preparation time form input
 * @returns a format used in the PreparationTimeField's input
 */
const preparationTimeFormat = (inputValue: string): string => {
  let hours = limitInputValue(inputValue.substring(0, 2), '99');
  let minutes = limitInputValue(inputValue.substring(2, 4), '59');
  let seconds = limitInputValue(inputValue.substring(4, 6), '59');
  return hours + ':' + minutes + (seconds.length ? ':' + seconds : '');
};

export default PreparationTimeField;
