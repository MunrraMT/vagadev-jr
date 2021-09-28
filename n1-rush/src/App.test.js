import { render, screen } from '@testing-library/react';

import App from './App';
import ContextProvider from './providers/ContextProvider';

test('renders learn react link', () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>,
  );
  const linkElement = screen.getByText(/N1 Rush/i);
  expect(linkElement).toBeInTheDocument();
});
