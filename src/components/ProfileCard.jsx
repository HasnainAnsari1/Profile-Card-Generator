import React from 'react';

function ProfileCard({ data }) {
  
  if (!data) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '300px',
      textAlign: 'center',
      marginTop: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Profile Picture */}
      <img 
        src={data.avatar_url} 
        alt={`${data.name}'s avatar`} 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />

      {/* User Name */}
      <h2>{data.name || data.login}</h2>

      {/* Bio */}
      <p style={{ color: '#666' }}>
        {data.bio || "No Bio"}
      </p>

      <hr style={{ border: '0.5px solid #eee' }} />

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '15px 0' }}>
        <div>
          <strong>Followers</strong>
          <p>{data.followers}</p>
        </div>
        <div>
          <strong>Repositories</strong>
          <p>{data.public_repos}</p>
        </div>
      </div>

      {/* GitHub Link */}
      <a 
        href={data.html_url} 
        target="_blank" 
        rel="noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#24292e',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        View GitHub Profile
      </a>
    </div>
  );
} 

export default ProfileCard;