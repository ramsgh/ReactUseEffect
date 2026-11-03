import React, { useState, useEffect } from 'react';

function TimerChild() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer mounted / Effect started');

    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // CLEANUP FUNCTION: Runs on unmount to prevent memory leaks & duplicate timers
    return () => {
      console.log('Cleanup: Interval cleared!');
      clearInterval(intervalId);
    };
  }, []);

  return <h3>⏱️ Active Timer: {seconds}s</h3>;
}

export default function CleanupExample() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
      <h2>2. useEffect Cleanup Function</h2>
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? 'Unmount Timer' : 'Mount Timer'}
      </button>
      {showTimer && <TimerChild />}
    </div>
  );
}
