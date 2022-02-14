import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, { rubberBand } from '@wellyshen/use-web-animations';

function AnimationFromLibrary() {
  // const element = useRef(null);

  const { ref, playState, getAnimation } = useWebAnimations({ ...rubberBand });

  return (
    <div>
      <div className='target' ref={ref}></div>
      Current animation state: {playState}
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  );
}

export default AnimationFromLibrary;