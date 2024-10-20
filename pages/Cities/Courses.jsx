import React, { useState } from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import images
import mumbaiImg from '../../utils/images/mumbai.jpg';
import puneImg from '../../utils/images/pune.jpg';
import nagpurImg from '../../utils/images/nagpur.jpg';
import amravatiImg from '../../utils/images/amravati.jpg';
import nashikImg from '../../utils/images/nashik.jpg';
import sambhajinagarImg from '../../utils/images/sambhajinagar.jpg';

// Updated courses array
const courses = [
    { id: 1, img: mumbaiImg, title: 'mumbai' },
    { id: 2, img: puneImg, title: 'pune' },
    { id: 3, img: nagpurImg, title: 'nagpur' },
    { id: 4, img: amravatiImg, title: 'amravati' },
    { id: 5, img: nashikImg, title: 'nashik' },
    { id: 6, img: sambhajinagarImg, title: 'sambhajinagar' }
];

function Courses() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCityClick = async (city) => {
        setLoading(true);
        setError(null);
        try {
            // Fixed: Use backticks for the URL
            const response = await axios.get(`http://localhost:10000/college/${city.toLowerCase()}`);

            console.log('Colleges fetched:', response.data); // This will show you what data is being fetched

            if (response.data && Array.isArray(response.data)) {
                navigate('/colleges', { state: { colleges: response.data, city } });
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            console.error('Error fetching colleges:', error.message || error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
            setError('An error occurred while fetching colleges. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Top Cities</h1>
                    <p className='text-center w-75 mb-5'>
                        "Explore the vibrant hubs of knowledge and innovation. These top cities are shaping the future of education!"
                    </p>
                </div>
            </header>

            <div className='container py-5'>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-center">
                        <p className="text-danger">{error}</p>
                    </div>
                ) : (
                    <div className='row g-4'>
                        {courses.map((course) => (
                            <div key={course.id} className='col-lg-6'>
                                <div onClick={() => handleCityClick(course.title)} className='text-decoration-none'>
                                    <Card className='text-white shadow scale-hover-effect'>
                                        <Card.Img src={course.img} alt={`Course in ${course.title}`} />
                                        <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                            <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Courses;
