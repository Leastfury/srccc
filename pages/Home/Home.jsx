import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

// Sample data for Top 10 Colleges of Maharashtra
const colleges = [
    { name: "College of Engineering Pune", established: 1854, location: "Pune", rank: 1 },
    { name: "Vishwakarma Institute of Technology", established: 1983, location: "Pune", rank: 2 },
    { name: "MIT World Peace University", established: 1983, location: "Pune", rank: 3 },
    { name: "Shivaji University", established: 1962, location: "Kolhapur", rank: 4 },
    { name: "Veermata Jijabai Technological Institute", established: 1887, location: "Mumbai", rank: 5 },
    { name: "D.Y. Patil College of Engineering", established: 1998, location: "Pune", rank: 6 },
    { name: "K.J. Somaiya College of Engineering", established: 1983, location: "Mumbai", rank: 7 },
    { name: "Sardar Patel Institute of Technology", established: 1962, location: "Mumbai", rank: 8 },
    { name: "Rajiv Gandhi Institute of Technology", established: 1992, location: "Mumbai", rank: 9 },
    { name: "Jawaharlal Nehru Engineering College", established: 1991, location: "Aurangabad", rank: 10 }
];

// Sample data for Top Exams
const exams = [
    { name: "MHT CET", date: "May 2025", eligibility: "Class 12th pass", url: "https://cetcell.mahacet.org/" },
    { name: "JEE Main", date: "January & April 2025", eligibility: "Class 12th pass", url: "https://jeemain.nta.ac.in/" },
    { name: "JEE Advanced", date: "June 2025", eligibility: "Qualify JEE Main", url: "https://jeeadv.ac.in/" },
    { name: "CAT", date: "November 2025", eligibility: "Graduation", url: "https://iimcat.ac.in/per/g06/pub/32842/ASM/WebPortal/1/index.html?32842@@1@@1" },
    { name: "MAT", date: "February, December 2025", eligibility: "Graduation", url: "https://mat.aima.in/" },
    { name: "LSAT", date: "June 2025", eligibility: "Graduation", url: "https://www.lsac.org/lsat" },
    { name: "NEET", date: "May 2025", eligibility: "Class 12th pass", url: "https://exams.nta.ac.in/NEET/" },
    { name: "GATE", date: "February 2025", eligibility: "Graduation", url: "https://gate2025.iitr.ac.in/" },
];

// Main Home Page Component
function Home() {
    const handleMoreInfoClick = (url) => {
        window.open(url, '_blank'); // Open the link in a new tab
    };

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <h1 className='text-center fw-semibold'>Campus Connect</h1>
                    <p>
                        Campus Connect is your comprehensive guide to exploring top colleges across the country,
                        providing essential information on courses, fees, and admission details to help you make
                        informed decisions about your education. Stay informed and connected on your educational journey!
                    </p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                Top Cities
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>2025 start with Top Cities</h2>
                            <p>
                                <b>Education Hubs Await You:</b> Uncover the best cities for education through MHT CET.
                                These vibrant locales are home to premier institutions and resources. Your dreams of a
                                successful career start here. Embrace the chance to thrive in the heart of knowledge!
                            </p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                    Explore Cities
                                </button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="Start Courses" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <h2 className='text-center mb-5'>Top 10 Colleges of Maharashtra for Engineering</h2>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Established</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges.map((college, index) => (
                                <tr key={index} className="college-row">
                                    <td>{college.rank}</td>
                                    <td>{college.name}</td>
                                    <td>{college.established}</td>
                                    <td>{college.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Exams Section */}
            <div className='py-5 bg-light'>
                <div className="container">
                    <h2 className='text-center mb-5'>Top Exams</h2>
                    <div className="row justify-content-center">
                        {exams.map((exam, index) => (
                            <div key={index} className="col-md-4 col-lg-4 mb-4">
                                <div className="exam-card p-3 text-center border rounded shadow-sm exam-card-hover">
                                    <h4>{exam.name}</h4>
                                    <p className="exam-date"><strong>Date:</strong> {exam.date}</p>
                                    <p><strong>Eligibility:</strong> {exam.eligibility}</p>
                                    <button
                                        className="btn btn-primary more-info-button"
                                        onClick={() => handleMoreInfoClick(exam.url)} // Use exam.url directly
                                    >
                                        More Info
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className='py-5 bg-light'>
                <div className="container">
                    <h2 className='text-center mb-5'>FAQs</h2>
                    <FaqAccordion />
                </div>
            </div>
        </div>
    );
}

export default Home;
