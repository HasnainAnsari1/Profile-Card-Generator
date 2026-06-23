import React, { useState } from 'react'


function Search({onSearch}) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (username.trim() === '') return;

        onSearch(username);
        setUsername('');
    };

    const styles = {
    form: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px',
      margin: '20px auto',
    },
    input: {
      flex: 1,
      padding: '12px 20px',
      fontSize: '16px',
      border: '2px solid #e1e4e8',
      borderRadius: '6px',
      outline: 'none',
      backgroundColor: '#fafbfc',
      color: '#24292e',
      transition: 'border-color 0.2s ease',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#2ea44f', 
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text"
        placeholder='Enter Github UserName'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        style={styles.input}
        />
        <button type='submit' style={styles.button}>Search</button>
      </form>
    </div>
  )
}

export default Search
