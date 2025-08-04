import React, { useState } from 'react';
import axios from 'axios';

const Lookup = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleLookup = async (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        try {
            const res = await axios.get(`/lookup/search`, {
                params: { code }
            });
            const data = res.data;

            if (data.status === 'success') {
                setResult(data.data);
            } else {
                setError(data.message || 'No result');
            }
        } catch (err) {
            setError('Error occurred while querying');
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            window.location.href = '/login';
        } catch (err) {
            alert('Logout failed');
        }
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
            <button onClick={handleLogout}>Logout</button>
            <h2>Lookup Bank Account</h2>
            <form onSubmit={handleLookup}>
                <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter account code"
                    style={{ width: "60%" }}
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {result && (
                <table border="1" style={{ marginTop: "1rem", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((row, index) => (
                            <tr key={index}>
                                <td>{row.code}</td>
                                <td>{row.name}</td>
                                <td>{row.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Lookup;
