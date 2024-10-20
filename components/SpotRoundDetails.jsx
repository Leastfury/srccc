import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Collapse, Button, Table } from 'react-bootstrap';
import './SpotRoundDetails.css'; // Import the CSS file

const SpotRoundDetails = () => {
    const { collegeId } = useParams(); // Get collegeId from the URL
    const [collegeDetails, setCollegeDetails] = useState(null);
    const [error, setError] = useState(null);
    const [openRounds, setOpenRounds] = useState({}); // State to track opened rounds

    useEffect(() => {
        const fetchCollegeDetails = async () => {
            try {
                const response = await fetch(`http://localhost:10000/spot_rounds/details/${collegeId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data); // Log the data for debugging
                setCollegeDetails(data);
            } catch (err) {
                setError(`Failed to fetch college details: ${err.message}`);
            }
        };

        fetchCollegeDetails();
    }, [collegeId]);

    const toggleRound = (year, round) => {
        const key = `${year}-${round}`; // Unique key for each year and round combination
        setOpenRounds((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle the current round
        }));
    };

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!collegeDetails) {
        return <div>Loading college details...</div>;
    }

    return (
        <Container className="my-2" style={{ paddingTop: '50px' }}> {/* Adjusted paddingTop */}
            <div className="content-border">
                <h1 className="college-title">
                    {collegeDetails.college_name} <span className="abbreviation">({collegeDetails.abbreviation})</span>
                </h1>

                {collegeDetails.img && (
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={collegeDetails.img}
                            alt={`${collegeDetails.college_name} logo`}
                            style={{ width: '50%', height: '400px', objectFit: 'cover', marginBottom: '20px', border: '2px solid #000' }}
                            className="college-image"
                        />
                    </div>
                )}

                <Card className="spot-details-card">
                    <Card.Body>
                        <Card.Title className="spot-title small-title">Spot Cutoffs</Card.Title>
    
                        {collegeDetails.spot_cutoffs?.map((cutoff, index) => (
                            <div key={index} className="mb-4 cutoff-section">
                                <h5 className="cutoff-year">Year: {cutoff.year}</h5>
                                {cutoff.rounds.map((round, roundIndex) => (
                                    <div key={roundIndex}>
                                        <Button
                                            variant="link"
                                            onClick={() => toggleRound(cutoff.year, round.round)}
                                            aria-controls={`round-${cutoff.year}-${round.round}`}
                                            aria-expanded={openRounds[`${cutoff.year}-${round.round}`]}
                                            className="round-toggle-button"
                                        >
                                            {round.round}
                                            <span className={openRounds[`${cutoff.year}-${round.round}`] ? "arrow-up" : "arrow-down"} />
                                        </Button>
                                        <Collapse in={openRounds[`${cutoff.year}-${round.round}`]}>
                                            <div id={`round-${cutoff.year}-${round.round}`}>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Course</th>
                                                            <th>Available Seats</th>
                                                            <th>Cutoff Score</th>
                                                            <th>Last Candidate Rank</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {round.details.map((detail, detailIndex) => (
                                                            <tr key={detailIndex}>
                                                                <td>{detail.course}</td>
                                                                <td>{detail.available_seats}</td>
                                                                <td>{detail.cutoff_score}</td>
                                                                <td>{detail.last_candidate_rank}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        )) || <div>No spot cutoff data available.</div>}
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default SpotRoundDetails;
