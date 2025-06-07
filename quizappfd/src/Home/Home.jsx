// src/pages/Home.jsx
import React from 'react';
import './Home.css'; // Optional: add custom styles

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Online Test Portal</h1>
            <p>Practice GATE Mock Tests, View Results, and Track Your Performance.</p>
            <div className="home-buttons">
                <a href="/register" className="btn">Register</a>
                <a href="/login" className="btn">Login</a>
            </div>
        </div>
    );
}

export default Home;
