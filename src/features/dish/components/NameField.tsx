import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { Dish } from '../types';
import { FieldInputProps } from './FieldInputProps';

const NameField = ({ name, label }: FieldInputProps) => {
  const { control } = useFormContext<Dish>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          size="small"
          onChange={onChange}
          helperText={error ? error.message : ''}
          error={!!error}
          value={value}
          label={label}
          fullWidth
          variant="outlined"
        />
      )}
    />
  );
};

export default NameField;
