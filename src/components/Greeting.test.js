import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders Hello world as a text", () => {
    // show component (Arrange)
    render(<Greeting />);

    // what we need to do (Act)
    //---

    //  what will be on the screen (Assert)
    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Rendering hello p text if button not click", () => {
    render(<Greeting />);
    const helloP = screen.getByText("Hello p", { exact: false });
    expect(helloP).toBeInTheDocument();
  });

  test("Rendering goodbye p text if button click", () => {
    render(<Greeting />);

    const changeTextBtn = screen.getByRole("button");

    userEvent.click(changeTextBtn);

    const goodbyeP = screen.getByText("goodbye p", { exact: false });
    expect(goodbyeP).toBeInTheDocument();
  });

  test("Rendering hello p text not show if button click", () => {
    render(<Greeting />);

    const changeTextBtn = screen.getByRole("button");

    userEvent.click(changeTextBtn);

    const notHelloP = screen.queryByText("hello p", { exact: false });
    expect(notHelloP).toBeNull();
  });
});
