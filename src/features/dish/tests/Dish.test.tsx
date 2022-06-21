import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../../App';
import { store } from '../../../app/store';
import { insertValue } from './testUtils';

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test('It should display a name field', () => {
  insertValue('Name', 'Ramen');
  expect(screen.getByLabelText(/name/i)).toHaveDisplayValue('Ramen');
});

test('It renders unique soup field', () => {
  insertValue('Name', 'Ramen');
  insertValue('Preparation Time', '01:30:30');
  fireEvent.mouseDown(screen.getByLabelText(/^Dish Type/i));
  fireEvent.click(screen.getByRole('option', { name: /Soup/i }));
  expect(screen.getByRole('slider')).toBeInTheDocument();
});
