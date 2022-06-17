/** @jsxImportSource @emotion/react */
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Dish } from './definitions';
import { TextField, Select, MenuItem, Stack } from '@mui/material';
import DishTimeField from './components/DishTimeField';
import { formWrapper } from './Dish.module.style';

export default function BaseForm() {
  const { handleSubmit, control, getValues } = useForm<Dish>();
  const values = getValues();
  const onSubmit: SubmitHandler<Dish> = (data) => alert(JSON.stringify(data));

  return (
    <form css={formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Name" {...field} />}
        />
        <Controller
          name="preparationTime"
          control={control}
          defaultValue={123}
          render={({ field }) => <DishTimeField />}
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          )}
        />
        <input type="submit" />
      </Stack>
    </form>
  );
}
