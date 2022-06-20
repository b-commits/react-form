/** @jsxImportSource @emotion/react */
import { useForm, SubmitHandler } from 'react-hook-form';
import { Dish } from '../definitions/types';
import { Stack, Button } from '@mui/material';
import { formWrapper } from './Dish.module.style';
import { resolvedSchema } from './validation';
import { FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import NameField from './formInputs/NameField';
import PreparationTimeField from './formInputs/PreparationTimeField';
import SpicinessField from './formInputs/SpicinessField';
import DishTypeField from './formInputs/DishTypeField';
import NumberField from './formInputs/NumberField';

const BaseForm = () => {
  const methods = useForm<Dish>({ resolver: resolvedSchema, mode: 'onChange' });
  const onSubmit: SubmitHandler<Dish> = (data: Dish) => {};
  const type = methods.watch('type');

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
          {type === 'Pizza' && (
            <>
              <NumberField name="numSlices" label="Pizza slices" />
              <NumberField name="diameter" label="Diameter [cm]" />
            </>
          )}
          {type === 'Sandwich' && (
            <NumberField name="numSlices" label="Bread slices" />
          )}
          {type === 'Soup' && <SpicinessField />}
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  );
};

export default BaseForm;
