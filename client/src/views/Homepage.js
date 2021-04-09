import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Homepage = () => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/lots/${location}`)
    }

    return (
        <>
            <h1>Welcome to Parking Filter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button>Search</button>
            </form>
        </>
    );
};

export default Homepage
