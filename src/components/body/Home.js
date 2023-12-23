import * as bootstrap from 'bootstrap';
import React, { useState, useEffect } from 'react';

import backgroundImage from '../../bg.png'; // Adjust the path to where your image is located



import './home.css';

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const phrases = ["I'm a Data Scientist.", "I'm Ricardo Andrade."];
    let ticker = setTimeout(() => {

      // Determine the current phrase based on the loopNum index
      const phraseIndex = loopNum % phrases.length;
      const fullPhrase = phrases[phraseIndex];

      // Add or remove a character
      const updatedText = isDeleting
        ? fullPhrase.slice(0, text.length - 1)
        : fullPhrase.slice(0, text.length + 1);

      setText(updatedText);

      // Determine typing speed
      if (isDeleting) {
        setTypingSpeed(prevSpeed => prevSpeed * (8 / 9));
      }

      // If the phrase is complete, start deleting after a delay
      if (!isDeleting && updatedText === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
        // If the phrase is completely deleted, move to the next one after a delay
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);  // Reset typing speed
      }

    }, isDeleting ? typingSpeed : typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);





  return (
    <div id="home" style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      minHeight: '100vh'
    }}
     className='text-white'>
      <div className='position-absolute homeBox d-flex justify-content-center align-items-center flex-column'>
        <div className='fs-3 fw-semibold'>
          Welcome
        </div>
        <div className='bigText fw-bold'>
          {text}
          <span className='typing-cursor'>|</span>
        </div>
        <div className='fs-4 fw-light'>
          aslkdfla skdjfalksd mfl sdf
        </div>
        <div className='mt-4'>
          <button class="btn btn-lg btn-primary" type="submit">Contact Me</button>
        </div>
      </div>
      <div className="scroll-indicator">
        <i class="bi bi-chevron-down"></i> {/* You can replace this with an image or icon of your choice */}
      </div>
    </div>
  )
}