import { useState } from "react";

const Greeting = () => {
    const [isHello, setIsHello] = useState(true);

    const changeTextHangler = () => {
        setIsHello(prevState => !prevState);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            <p>{isHello ? 'Hello p!' : 'Goodbye p!'}</p>
            <button onClick={changeTextHangler}>Change text</button>
        </div>
    );
};

export default Greeting;