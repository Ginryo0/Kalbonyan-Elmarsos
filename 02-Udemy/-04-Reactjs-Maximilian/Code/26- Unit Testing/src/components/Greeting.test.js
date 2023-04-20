import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

// Organize tests in test suites
describe('Greeting Component', () => {
  test('renders Hello world as text', () => {
    // Arrange
    // supposed to use createRoot instead of render
    render(<Greeting />);

    // Act
    // .. nothing here

    // Assert
    // query -> no errors
    // get -> error
    // find -> return promise
    // {exact: false} -> case insenstive, would return a substring
    const helloWorldEl = screen.getByText('Hello World!');

    expect(helloWorldEl).toBeInTheDocument();
  });

  test('renders "good to see" if btn was not clicked', () => {
    render(<Greeting />);

    const outputEl = screen.getByText('good to see', { exact: false });

    expect(outputEl).toBeInTheDocument();
  });

  test('renders "Changed" if the button was clicked', () => {
    render(<Greeting />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const outputEl = screen.getByText('Changed', { exact: false });

    expect(outputEl).toBeInTheDocument();
  });

  test('doest not render "good to see" if the button was clicked', () => {
    render(<Greeting />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const outputEl = screen.queryByText('good to see', { exact: false });

    expect(outputEl).toBeNull();
  });
});
