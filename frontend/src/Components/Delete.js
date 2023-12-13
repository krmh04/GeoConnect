import React, { useState } from 'react';
import axios from 'axios';

const DeleteAccountPage = () => {
  const [email, setEmail] = useState('');

  const handleDeleteAccount = async () => {
    try {
       await axios.delete('http://localhost:3000/deleteuser', { data: { email } });
      alert('Account deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting account');
    }
  };

  return (
    <div>
            <div className="delete-account-container"> 
      <h2>Delete Account</h2>
      <form className="delete-account-form">
      <label >Email: </label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button onClick={handleDeleteAccount}>Delete Account</button>
            </form>
    </div>
    </div>
  );
};

export default DeleteAccountPage;
