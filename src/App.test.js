import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio with Kotlin and Jetpack Compose references', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const elements = screen.getAllByText(/Kotlin/i);
  expect(elements.length).toBeGreaterThan(0);
});
