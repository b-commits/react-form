/** @jsxImportSource @emotion/react */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dish } from './types';
import { Stack } from '@mui/material';
import { formWrapper } from './Dish.module.style';
import { resolvedSchema } from './validation';
import { FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import NameField from './components/NameField';
import PreparationTimeField from './components/PreparationTimeField';
import { DishTypeField } from './components/DishTypeField';

const BaseForm = () => {
  const methods = useForm<Dish>({ resolver: resolvedSchema, mode: 'onChange' });
  const onSubmit: SubmitHandler<Dish> = (data: Dish) => {};

  return (
    <FormProvider {...methods}>
      <form css={formWrapper} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <NameField name="name" label="Name" />
          <PreparationTimeField
            name="preparationTime"
            label="Preparation Time"
          />
          <DishTypeField />
          <input type="submit" />
        </Stack>
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  );
};

export default BaseForm;
