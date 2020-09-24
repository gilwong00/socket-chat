import React from "react";
import { render, screen } from "@testing-library/react";
import { Message, IMessage } from ".";

describe("<Message />", () => {
  test("should display sent message", () => {
    const message: IMessage = {
      id: "324",
      user: "test",
      text: "some random text",
    };
    const name: string = "test";

    const props = {
      message,
      name,
    };

    const { getByText } = render(<Message {...props} />);
    expect(getByText("some random text")).toBeInTheDocument();
  });

  test("should display received message", () => {
    const message: IMessage = {
      id: "234",
      user: "test",
      text: "received message",
    };
    const name: string = "another user";

    const props = {
      message,
      name,
    };

    const { getByText } = render(<Message {...props} />);
    expect(getByText("received message")).toBeInTheDocument();
  });
});
