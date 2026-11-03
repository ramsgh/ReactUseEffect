import React from 'react';
import { useFetch } from './useFetch';
import { useLocalStorage } from './useLocalStorage';

export default function CustomHooksDemo() {
  const [name, setName] = useLocalStorage('user_name', 'Alex');
  const { data: posts, loading, error } = useFetch('/api/posts');

  return (
    <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
      <h2>4. Custom Hooks (`useLocalStorage` & `useFetch`)</h2>
      
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Enter name..." 
      />
      <p>Persisted Name: <strong>{name}</strong></p>

      <h3>useFetch Posts:</h3>
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      {posts && posts.map(p => <div key={p.id}><strong>{p.title}</strong></div>)}
    </div>
  );
}
