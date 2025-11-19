import { useState } from 'react';

export default function Dashboard() {
  const [action, setAction] = useState('');

  const handleAction = async (actionType) => {
    const response = await fetch('/api/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: actionType }),
    });

    const data = await response.json();
    if (data.success) {
      alert(`${actionType} action performed successfully`);
    } else {
      alert('Action failed');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleAction('kick')}>Kick</button>
      <button onClick={() => handleAction('mute')}>Mute</button>
      <button onClick={() => handleAction('warn')}>Warn</button>
    </div>
  );
}
