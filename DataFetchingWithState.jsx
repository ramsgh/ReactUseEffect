import React, { useState, useEffect } from 'react';

export default function DataFetchingWithState() {
  const [mode, setMode] = useState('loading');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (!isMounted) return;

      if (mode === 'success') {
        setUsers([
          { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 2, name: 'Brian Smith', email: 'brian@example.com' }
        ]);
        setLoading(false);
        return;
      }

      if (mode === 'error') {
        setError('Failed to fetch users from the server.');
        setLoading(false);
        return;
      }

      setLoading(true);
    }, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [mode]);

  return (
    <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
      <h2>3. Data Fetching with Loading & Error States</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setMode('loading')} style={{ marginRight: '0.5rem' }}>
          Loading
        </button>
        <button onClick={() => setMode('success')} style={{ marginRight: '0.5rem' }}>
          Success
        </button>
        <button onClick={() => setMode('error')}>
          Error
        </button>
      </div>

      {loading && <p>⌛ Loading users...</p>}
      {error && <p style={{ color: '#f87171' }}>❌ Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name} — {u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
