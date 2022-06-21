import { fireEvent, screen } from '@testing-library/react';

export const insertValue = (labelText: string, inputValue: string) => {
  fireEvent.input(screen.getByLabelText(labelText), {
    target: {
      value: inputValue,
    },
  });
};
