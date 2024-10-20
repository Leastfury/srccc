import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Colleges.css';
import cityImg from '../utils/images/courses-page-header.jpg'; // Adjusted import path

function Colleges() {
    const location = useLocation();
    const { city } = location.state || {}; // Destructure city from location.state

    const [colleges, setColleges] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // New loading state
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchColleges = async () => {
            setLoading(true); // Set loading to true before fetch
            try {
                // Use backticks for the template literal
                const response = await fetch(`/college/${city}`); // Use relative URL with leading slash
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setColleges(data);
            } catch (error) {
                console.error('Fetch error:', error); // Log the error to console
                setError('Error fetching colleges: ' + error.message);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        if (city) {
            fetchColleges();
        } else {
            setError('No city provided.'); // Handle case when city is undefined
            setLoading(false);
        }
    }, [city]);

    // Function to handle the click on a college name
    const handleCollegeClick = (collegeId) => {
        // Use backticks for the template literal
        navigate(`/college/details/${collegeId}`); // Use navigate for internal routing
    };

    // Split colleges array into two parts
    const half = Math.ceil(colleges.length / 2);
    const firstHalf = colleges.slice(0, half);
    const secondHalf = colleges.slice(half);

    return (
        <div className="colleges-page">
            {/* Header with image */}
            <div className="header-container">
                <img
                    src={cityImg} // Use the imported image
                    alt="Colleges Banner"
                    className="colleges-banner-image"
                />
                <header className="text-center header-overlay">
                    <h1>Colleges in {city}</h1>
                </header>
            </div>

            <div className="container">
                {loading && <p>Loading colleges...</p>} 
                {error && <p className="error-message">{error}</p>}
                {colleges.length > 0 ? (
                    <div className="college-columns">
                        <div className="college-column">
                            {firstHalf.map((college) => (
                                <div key={college._id} className="college-item fade-in">
                                    <span onClick={() => handleCollegeClick(college._id)} className="college-link">
                                        {college.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="college-column">
                            {secondHalf.map((college) => (
                                <div key={college._id} className="college-item fade-in">
                                    <span onClick={() => handleCollegeClick(college._id)} className="college-link">
                                        {college.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    !loading && <p>No colleges found for {city}.</p>
                )}
            </div>
        </div>
    );
}

export default Colleges;
