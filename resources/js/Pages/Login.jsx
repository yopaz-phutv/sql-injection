import React, { useState } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('/login', { username, password });
            if (res.status === 200) router.visit('/lookup');
        } catch (err) {
            if (err.response?.status === 422) {
                setError(err.response.data.errors?.message || 'Invalid username or password');
            } else {
                setError('Network error or server error');
            }
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label><br />
                    <input value={username} onChange={e => setUsername(e.target.value)} style={{ width: "60%" }}/>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <label>Password:</label><br />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: "60%" }}
                    />
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            /> Show password
                        </label>
                    </div>
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
