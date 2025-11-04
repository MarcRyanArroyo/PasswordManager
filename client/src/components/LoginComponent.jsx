import React, { useState } from 'react'

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!username || !password) {
        setErrorMessage('Please enter both username and password.');
        return;
        }

        // Backend Authentication
        // For demonstration, we'll simulate a successful login for specific credentials
        if (username === 'user' && password === 'password') {
        alert('Login successful!');
        setErrorMessage(''); // Clear any previous error messages
        // Redirect or perform other actions after successful login
        } else {
        setErrorMessage('Invalid username or password.');
        }
    };

    return (
        <div style={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '300px'}}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '8px 0', margin: '5px 0' }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px 0', margin: '5px 0' }}
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
                Login
                </button>
            </form>
        </div> 
    );
}

export default LoginComponent