import React, { useState, useEffect } from 'react';
import './Hero.css';
import Typing from './Typing';

export const Hero = () => {
    // const [commandIndex, setCommandIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const commands = ["whoami", "projects", "contact"];
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // Cambia la palabra sugerida cada 3 segundos
        // const interval = setInterval(() => {
        //     setCommandIndex((prev) => (prev + 1) % commands.length);
        // }, 3000);
        // return () => clearInterval(interval);
    }, []);

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            const cmd = inputValue.toLowerCase().trim();
            if (cmd === 'whoami') window.location.href = '/about';
            if (cmd === 'projects') window.location.href = '/projects';
            setInputValue(""); // Limpiar
        }
    };

    return (
        <div className="greetings">
            <h3>Hi, I'm</h3>
            <h1><span>Pavel Mansilla G.</span></h1>
            <h2>Fullstack developer</h2>
            <div className="action">
                <p>// write the code below to continue <br />// or tab for more options</p>

                <div className="terminal">
                    <span style={{ color: "var(--tertiary)" }}>levap@fs ~&gt; </span>
                    <div className="custom-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => {
                                console.log("cambiando")
                                setInputValue(e.target.value)
                            }}
                            onKeyDown={handleKeyDown}
                            onFocus={() => {
                                console.log("focused");
                                setIsFocused(true)
                            }}
                            onBlur={() => {
                                console.log("blur");
                                setIsFocused(false)
                            }}
                        />
                        {(!isFocused && inputValue === "") && (
                            <Typing />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};