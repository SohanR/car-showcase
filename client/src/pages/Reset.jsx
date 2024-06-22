import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Reset() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/api/reset-password', {
                password: password,
                confirmPassword: confirmPassword,
            });

            if (response.status === 200) {
                setResetSuccess(true);
            } else {
                setError('Failed to reset password');
            }
        } catch (error) {
            setError('Failed to reset password');
        }
    };

    if (resetSuccess) {
        return (
            <div>
                <h2>Password reset successfully!</h2>
                <p><Link to="/login">Login</Link></p>
            </div>
        );
    }

    return (
        <div>
            <h2>Reset Password</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default Reset;
