import React from 'react'
import { useState } from 'react'
import Search from './components/Search';
import ProfileCard from './components/ProfileCard';

function App() {

    const [userData, setUserData] = useState(null);
    const [loadingState, setLoadingState] = useState('idle');

    const fetchGitHubUser = (username) => {
  setLoadingState('loading'); 

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('User nahi mila');
      }
      return response.json();
    })
    .then((data) => {
      setUserData(data);         
      setLoadingState('success'); 
    })
    .catch((error) => {
      setLoadingState('error');  
    });
};

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
    <h1 style={{fontFamily : "monospace"}}>GitHub Profile Card Generator</h1>
    
    
    <Search onSearch={fetchGitHubUser} />

    
    {loadingState === 'loading' && <h3>Loading Profile...</h3>}
    {loadingState === 'error' && <h3 style={{ color: 'red' }}>Oops! Yeh user nahi mila.</h3>}
    {loadingState === 'success' && userData && (
      <ProfileCard data={userData} />
    )}
  </div>
);
}

export default App
