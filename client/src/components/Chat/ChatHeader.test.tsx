import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChatHeader } from '.';

describe('<ChatHeader />', () => {
  test('should render without crashing', () => {
    const { unmount } = render(
      <Router>
        <ChatHeader room='test' />
      </Router>
    );
    unmount();
  });

  test('should display room name', () => {
    const { getByText } = render(
      <Router>
        <ChatHeader room='test' />
      </Router>
    );
    expect(getByText('test')).toBeInTheDocument();
  });
});
