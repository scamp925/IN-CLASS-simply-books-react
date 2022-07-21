import React from 'react';
import Button from 'react-bootstrap/Button';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div style={{ width: '18rem', margin: '10px' }}><User
      image={user.photoURL}
      email={user.email}
      name={user.displayName}
      lastLogin={user.metadata.lastSignInTime}
    />
      <Button variant="danger" className="sign-out-btn" onClick={signOut}>Sign Out</Button>{' '}
    </div>
  );
}
