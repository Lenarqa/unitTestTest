import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders Hello world as a text", ()=>{
    // show component (Arrange)
    render(<Greeting />)

    // what we need to do (Act) 
    //---

    //  what will be on the screen (Assert)
    const helloWorldElement = screen.getByText("Hello world", {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
    
});