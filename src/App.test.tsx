import React from 'react';
import { render } from '@testing-library/react';
import logo from './logo.svg';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App logo={logo} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
