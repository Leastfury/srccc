import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SpotRounds.css'; // Ensure this file includes the styles above
import bannerImage from '../utils/images/img23.jpg'; // Adjust this to your image path

const SpotRounds = () => {
    const [spotRounds, setSpotRounds] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [clickedCollegeId, setClickedCollegeId] = useState(null);

    useEffect(() => {
        const fetchSpotRounds = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:10000/spot_rounds');
                if (!response.ok) {
                    throw new Error('Failed to fetch spot rounds');
                }
                const data = await response.json();
                setSpotRounds(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSpotRounds();
    }, []);

    const handleCollegeClick = (collegeId) => {
        setClickedCollegeId(collegeId);
        setTimeout(() => setClickedCollegeId(null), 300);
    };

    return (
        <div className="spot-rounds-page">
            {/* Banner Section */}
            <div className="banner-section">
                <img src={bannerImage} alt="Spot Rounds Banner" className="banner-img" />
                <h1 className="spot-round-title">Available Spot Rounds</h1>
            </div>

            <div className="spot-rounds-content">
                <div className="container my-4">
                    {loading && <p>Loading spot rounds...</p>}
                    {error && <p className="error-message">{error}</p>}
                    {spotRounds.length > 0 ? (
                        <div className="college-boxes-container">
                            {spotRounds.map((round) => (
                                <div 
                                key={round.college_id} 
                                className={`college-box ${clickedCollegeId === round.college_id ? 'pop-out' : ''}`} 
                                onClick={() => handleCollegeClick(round.college_id)}
                            >
                                <Link to={`/spot-rounds/details/${round.college_id}`}>
                                    {round.college_name}
                                </Link>
                            </div>
                            
                            ))}
                        </div>
                    ) : (
                        !loading && <p>No spot rounds available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpotRounds;