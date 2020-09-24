import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ChatInput } from '.';

describe('<ChatInput />', () => {
  beforeEach(jest.clearAllMocks);
  afterEach(() => cleanup());

  const message: string = 'message';
  const setMessageSpy = jest.fn();
  const sendMessageSpy = jest.fn();

  test('should render without crashing', () => {
    const { unmount } = render(
      <ChatInput
        message={message}
        setMessage={setMessageSpy}
        sendMessage={sendMessageSpy}
      />
    );

    unmount();
  });

  test('on change should call setMessageSpy', () => {
    const { getByPlaceholderText } = render(
      <ChatInput
        message={message}
        setMessage={setMessageSpy}
        sendMessage={sendMessageSpy}
      />
    );
    const inputElm = getByPlaceholderText('Say something nice');
    fireEvent.change(inputElm, { target: { value: 'something' } });
    expect(setMessageSpy).toBeCalled();
  });

  test('pressing enter should call sendMessageSpy', () => {
    const { getByPlaceholderText } = render(
      <ChatInput
        message={message}
        setMessage={setMessageSpy}
        sendMessage={sendMessageSpy}
      />
    );
    const inputElm = getByPlaceholderText('Say something nice');
    fireEvent.keyDown(inputElm, { key: 'Enter' });
    expect(sendMessageSpy).toBeCalled();
  });

  test('pressing any button button should not call sendMessageSpy', () => {
    const { getByPlaceholderText } = render(
      <ChatInput
        message={message}
        setMessage={setMessageSpy}
        sendMessage={sendMessageSpy}
      />
    );
    const inputElm = getByPlaceholderText('Say something nice');
    fireEvent.keyDown(inputElm, { key: 'Shift' });
    expect(sendMessageSpy).not.toBeCalled();
  });

  test('click send button call sendMessageSpy', () => {
    const { getByText } = render(
      <ChatInput
        message={message}
        setMessage={setMessageSpy}
        sendMessage={sendMessageSpy}
      />
    );
    const btn = getByText('Send');
    fireEvent.click(btn, { preventDefault: jest.fn() });
    expect(sendMessageSpy).toBeCalled();
  });
});
