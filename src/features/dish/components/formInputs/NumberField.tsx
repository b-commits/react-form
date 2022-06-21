import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { Dish } from '../../definitions/types';
import { NumberFieldInputProps } from './FieldInputProps';

const NumberField = ({ name, label, allowDecimal }: NumberFieldInputProps) => {
  const { control } = useFormContext<Dish>();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          {...(allowDecimal
            ? {
                inputProps: { min: 12, max: 100, step: 0.5 },
              }
            : { inputProps: { min: 1, max: 100 } })}
          type="number"
          size="small"
          onChange={onChange}
          helperText={error ? error.message : ' '}
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

export default NumberField;
