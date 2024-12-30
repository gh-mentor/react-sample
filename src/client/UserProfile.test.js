import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './UserProfile';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    userId: '1', // Mock userId
  }),
}));

// Mock fetch to return expected user data
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    }),
  })
);

test('renders user profile', async () => {
  const { findByLabelText } = render(
    <Router>
      <UserProfile />
    </Router>
  );

  const nameInput = await waitFor(() => findByLabelText(/name/i));
  expect(nameInput.value).toBe('Leanne Graham'); // Example name from JSONPlaceholder

  const emailInput = await waitFor(() => findByLabelText(/email/i));
  expect(emailInput.value).toBe('Sincere@april.biz'); // Example email from JSONPlaceholder

  const phoneInput = await waitFor(() => findByLabelText(/phone/i));
  expect(phoneInput.value).toBe('1-770-736-8031 x56442'); // Example phone from JSONPlaceholder
});