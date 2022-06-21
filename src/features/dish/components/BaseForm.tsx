/** @jsxImportSource @emotion/react */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dish, DishTypes } from '../definitions/types';
import { Stack, Button, CircularProgress } from '@mui/material';
import { formWrapper, form } from './Dish.module.style';
import { validationSchema } from './validation';
import { FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { postDish } from '../api/dishApi';
import NameField from './formInputs/NameField';
import PreparationTimeField from './formInputs/PreparationTimeField';
import SpicinessField from './formInputs/SpicinessField';
import DishTypeField from './formInputs/DishTypeField';
import NumberField from './formInputs/NumberField';

const BaseForm = () => {
  const [submitting, isSubmitting] = useState<boolean>(false);
  const methods = useForm<Dish>({
    resolver: validationSchema,
    mode: 'onChange',
  });
  const type: DishTypes = methods.watch('type');

  const onSubmit: SubmitHandler<Dish> = async (data: Dish) => {
    console.log('submitting');
    isSubmitting(true);
    await postDish(data);
    isSubmitting(false);
  };

  return (
    <FormProvider {...methods}>
      <form css={formWrapper} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack
          css={form}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <NameField name="name" label="Name" />
          <PreparationTimeField
            name="preparationTime"
            label="Preparation Time"
          />
          <DishTypeField />
          {type === DishTypes.PIZZA && (
            <>
              <NumberField name="numPizzaSlices" label="Pizza slices" />
              <NumberField name="diameter" label="Diameter [cm]" allowDecimal />
            </>
          )}
          {type === DishTypes.SANDWICH && (
            <NumberField name="numBreadSlices" label="Bread slices" />
          )}
          {type === DishTypes.SOUP && <SpicinessField />}
          {submitting ? (
            <CircularProgress />
          ) : (
            <Button fullWidth variant="contained" type="submit">
              Submit
            </Button>
          )}
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              methods.reset();
            }}
          >
            Reset
          </Button>
        </Stack>
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  );
};

export default BaseForm;
