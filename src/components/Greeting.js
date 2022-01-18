import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [isHello, setIsHello] = useState(true);

    const changeTextHangler = () => {
        setIsHello(prevState => !prevState);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            <Output>{isHello ? 'Hello p!' : 'Goodbye p!'}</Output>
            <button onClick={changeTextHangler}>Change text</button>
        </div>
    );
};

export default Greeting;