import React, { useState, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import SideNav from './components/Nav';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialIcons from './components/Socialicon';
import DragArea from './components/Footer';
import MessageBox from './components/Message';

const App = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const [showExpandedMessage, setShowExpandedMessage] = useState(false); // To control when to show expanded message
  const dragAreaRef = useRef(null);

  
  const handleDragEnd = (event, info) => {
    if (dragAreaRef.current) {
      const dragArea = dragAreaRef.current.getBoundingClientRect();
      const { clientX: x, clientY: y } = event; 

      const isInside =
        x >= dragArea.left &&
        x <= dragArea.right &&
        y >= dragArea.top &&
        y <= dragArea.bottom;

      if (isInside) {
        
        setShowExpandedMessage(true); 
      } else {
        
        setShowExpandedMessage(false); 
      }
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <>
      {/* Other sections of the page */}
      <Home />
      <SideNav />
      <About />
      <Skills />
      <Projects />

      {/* SocialIcons component */}
      {!showExpandedMessage && (
        <div className="fixed top-4 lg:top-4 right-2 lg:right-8 h-[10vh] z-50 rounded-full flex flex-col items-center justify-center">
          {!isDragging && (
            <span className="bg-gray-900 text-white text-sm font-bold font-mono px-3 py-2 rounded-full shadow-lg transition-transform duration-300 animate-pulse tracking-wider ease-in-out transform hover:scale-105">
              I'm draggable
            </span>
          )}
          <SocialIcons
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </div>
      )}

      {/* Full-screen section where DragArea is centered */}
      <section id='contact'>
      {!showExpandedMessage && (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-purple-800 to-black">
          <h1 className="text-white text-4xl lg:text-6xl font-extrabold mb-12 animate-pulse tracking-wider text-center">
      Let's see if you can find<br/> the key to unlock this
    </h1>
          <h1 className="text-[#87CEEB] text-2xl lg:text-3xl font-extrabold mb-12 opacity-60 text-center">
          Hint: The key is a draggable element <br/> in this page with some icons.
    </h1>
    
          <div
            ref={dragAreaRef}
            className="h-[11vh] w-40 bg-blue-500 rounded-full flex items-center justify-center"
          >
            <p className="text-gray-300">Drop key Here</p>
          </div>
        </div>
      )}

      
      {showExpandedMessage && (
        <>
        <DragArea />
        <MessageBox />
        </>
      )}
      </section>
      
    </>
  );
};

export default App;
