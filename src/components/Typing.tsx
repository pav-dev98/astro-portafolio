// src/components/TypingTest.jsx
import { TypeAnimation } from 'react-type-animation';

export default function Typing() {
  return (
    <TypeAnimation
      sequence={[
        'whoami', 
        2000, 
        'projects', 
        2000, 
        'contact', 
        2000 
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      style={{ 
        fontSize: '16px',
        display: 'inline-block',
        fontFamily: 'monospace' 
      }}
    />
  );
}