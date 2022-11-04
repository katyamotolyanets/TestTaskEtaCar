import { render, cleanup, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

afterEach(cleanup);

describe('tests for Input component', () => {
  it('should return empty value if was entered string in input with type number', async () => {
    render(
      <Input
        value='qwerty'
        type='number'
        testId='form-field-number'
        handleChange={() => {}}
      />,
    );
    const inputField = await screen.findByTestId(`form-field-number`);
    await waitFor(() => expect(inputField).toHaveDisplayValue(''));
    await waitFor(() => expect(inputField).toHaveAttribute('type', 'number'));
  });
  it('should have attribute type with value password', async () => {
    render(
      <Input
        value='qwerty'
        type='password'
        testId='form-field-password'
        handleChange={() => {}}
      />,
    );
    const inputField = await screen.findByTestId(`form-field-password`);
    await waitFor(() => expect(inputField).toHaveAttribute('type', 'password'));
  });
  it('should have attribute type with value text', async () => {
    render(
      <Input
        value='qwerty'
        type='text'
        testId='form-field-text'
        handleChange={() => {}}
      />,
    );
    const inputField = await screen.findByTestId(`form-field-text`);
    await waitFor(() => expect(inputField).toHaveAttribute('type', 'text'));
  });
  it('should have attribute type with value text', async () => {
    render(
      <Input
        value='qwerty'
        type='password'
        testId='form-field-text'
        handleChange={() => {}}
      />,
    );
    const inputField = await screen.findByTestId(`form-field-text`);
    await waitFor(() => expect(inputField).toHaveAttribute('bubbles', 'true'));
  });
});
