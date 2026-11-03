import React, { useState, useEffect } from 'react';

export default function DependencyVariations() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 1. No dependency array: Runs on EVERY render
  useEffect(() => {
    console.log('Effect 1: Executed on every render');
  });

  // 2. Empty dependency array []: Runs ONLY ONCE on mount
  useEffect(() => {
    console.log('Effect 2: Executed once on component mount');
  }, []);

  // 3. Dependency array [count]: Runs on mount AND when `count` changes
  useEffect(() => {
    console.log(`Effect 3: Executed because count updated to ${count}`);
  }, [count]);

  return (
    <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
      <h2>1. useEffect Dependency Array Variations</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment Count ({count})</button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
        style={{ marginLeft: '1rem', padding: '0.5rem' }} 
      />
      <p>Open browser console to view live effect execution logs!</p>
    </div>
  );
}
