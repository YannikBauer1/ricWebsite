import React, { useState, useEffect } from 'react';

import './menu.css';


function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    'HOME',
    'ABOUT ME',
    'PORTFOLIO',
    'CONTACT'
  ];

  const formatForId = (str) => str.toLowerCase().replace(/\s+/g, '-');

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a scroll threshold (e.g., 10px)
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar justify-content-between py-1 px-4 ${isScrolled ? 'bg-dark shadow-sm' : ''}`}
      id="list-example" data-bs-theme="dark">
      <div className='navbar-brand text-primary fs-2 fw-semibold'>Ricardo</div>
      <div>
        <ul className='nav'>
          {items.map((item, index) => (
            <li className="nav-item">
              <a
                key={index}
                href={`#${formatForId(item)}`}
                className={`nav-link my-2 text-center text-white`}
                aria-current={index === activeIndex ? "true" : "false"}
                onClick={() => {
                  if (item !== 'A disabled link item') {
                    setActiveIndex(index);
                  }
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-brand d-flex flex-row'>
        <a href="mailto:yannikbauer.1@gmail.com">
          <div className='p-1 linksBlock'>
            <i class="bi bi-envelope-fill text-white"></i>
          </div>
        </a>
        <a href="https://github.com/YannikBauer1" target="_blank" rel="noopener noreferrer">
          <div className='p-1 linksBlock'>
            <i class="bi bi-github text-white"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ricardo-andrade-329362219/" target="_blank" rel="noopener noreferrer">
          <div className='p-1 linksBlock'>
            <i class="bi bi-linkedin text-white"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;

/*

      <div className="list-group" id="list-example">
        {items.map((item, index) => (
          <a 
            key={index}
            href={`#${formatForId(item)}`} 
            className={`my-2 border rounded-0 text-center list-group-item list-group-item-action`} 
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => {
              if(item !== 'A disabled link item') {
                setActiveIndex(index);
              }
            }}
          >
            {item}
          </a>
        ))}
      </div>


          <div className='col d-flex justify-content-center'>
            <img src="images/y.png" className='img-fluid symbol'/>
          </div>
          <div className='col d-none d-lg-flex align-items-center menuTitle lh-sm'>
            Yannik Bauer
          </div>

      <div className='linksDiv pt-4 pb-1 d-flex justify-content-evenly'>
        <a href="mailto:yannikbauer.1@gmail.com">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-envelope-fill"></i>
          </div>
        </a>
        <a href="https://github.com/YannikBauer1" target="_blank" rel="noopener noreferrer">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-github"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/yannik-bauer-53259b233/" target="_blank" rel="noopener noreferrer">
          <div className='p-1 border border-black linksBlock'>
            <i class="bi bi-linkedin"></i>
          </div>
        </a>
      </div>




export default function Menu() {
  return (
    <div class="left-menu">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          HOME
        </a>
        <a href="#" class="list-group-item list-group-item-action">ABOUT ME</a>
        <a href="#" class="list-group-item list-group-item-action">PORTFOLIO</a>
        <a href="#" class="list-group-item list-group-item-action">PUBLICATIONS</a>
        <a href="#" class="list-group-item list-group-item-action">CONTACT</a>
      </div>
    </div>
  )
}*/

/**
<a href="#" class="list-group-item list-group-item-action">SERVICES</a>
<a href="#" class="list-group-item list-group-item-action">CUSTOMERS</a>
 */