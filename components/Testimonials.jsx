// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Testimonials.css';

// const Testimonials = () => {
//     const [testimonials, setTestimonials] = useState([]);
//     const [newTestimonial, setNewTestimonial] = useState({
//         name: '',
//         graduationYear: '',
//         testimonial: '',
//         degree: '',
//         major: '',
//         currentPosition: '',
//         company: '',
//         collegeName: '',
//         Contact: '',
//         photoUrl: ''
//     });

//     useEffect(() => {
//         fetchTestimonials();
//     }, []);

//     const fetchTestimonials = async () => {
//         try {
//             const response = await axios.get('http://localhost:10000/api/testimonials');
//             setTestimonials(response.data);
//         } catch (error) {
//             console.error('Error fetching testimonials:', error);
//         }
//     };

//     const handleChange = (e) => {
//         setNewTestimonial({
//             ...newTestimonial,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:10000/api/testimonials', newTestimonial);
//             fetchTestimonials();
//             setNewTestimonial({
//                 name: '',
//                 graduationYear: '',
//                 testimonial: '',
//                 degree: '',
//                 major: '',
//                 currentPosition: '',
//                 company: '',
//                 collegeName: '',
//                 Contact: '',
//                 photoUrl: ''
//             });
//         } catch (error) {
//             console.error('Error adding testimonial:', error);
//         }
//     };

//     return (
//         <div className="testimonials-container">
//             <div className="background-animation"></div>
//             <h1 className="main-heading">Alumni Testimonials</h1>

//             <div className="row">
//                 <div className="col-md-8 mx-auto">
//                     <div className="card testimonial-form">
//                         <div className="card-body">
//                             <h3 className="card-title">Submit Your Testimonial</h3>
//                             <form onSubmit={handleSubmit}>
//                                 <input type="text" className="form-control" name="name" placeholder="Your Name" value={newTestimonial.name} onChange={handleChange} required />
//                                 <input type="number" className="form-control" name="graduationYear" placeholder="Graduation Year" value={newTestimonial.graduationYear} onChange={handleChange} required />
//                                 <textarea className="form-control" name="testimonial" placeholder="Your Testimonial" value={newTestimonial.testimonial} onChange={handleChange} required rows="3"></textarea>
//                                 <input type="text" className="form-control" name="degree" placeholder="Degree" value={newTestimonial.degree} onChange={handleChange} required />
//                                 <input type="text" className="form-control" name="major" placeholder="Major" value={newTestimonial.major} onChange={handleChange} required />
//                                 <input type="text" className="form-control" name="currentPosition" placeholder="Current Position" value={newTestimonial.currentPosition} onChange={handleChange} required />
//                                 <input type="text" className="form-control" name="company" placeholder="Company" value={newTestimonial.company} onChange={handleChange} required />
//                                 <input type="text" className="form-control" name="collegeName" placeholder="College" value={newTestimonial.collegeName} onChange={handleChange} required />
//                                 <input type="tel" className="form-control" name="Contact" placeholder="Enter Contact Number" value={newTestimonial.Contact} onChange={handleChange} required />
//                                 <input type="text" className="form-control" name="photoUrl" placeholder="Photo URL (optional)" value={newTestimonial.photoUrl} onChange={handleChange} />
//                                 <button type="submit" className="btn submit-btn">Submit Testimonial</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <h2 className="testimonials-heading">All Testimonials</h2>
//             <div className="row testimonials-grid">
//                 {testimonials.length > 0 ? (
//                     testimonials.map((testimonial) => (
//                         <div key={testimonial._id} className="col-md-6 mb-4">
//                             <div className="card testimonial-card">
//                                 {testimonial.photoUrl && (
//                                     <img src={testimonial.photoUrl} className="card-img-top testimonial-image" alt={`${testimonial.name}'s photo`} />
//                                 )}
//                                 <div className="card-body">
//                                     <h5 className="card-title college-name">{testimonial.collegeName}</h5>
//                                     <h6 className="card-subtitle mb-2">{testimonial.name} : Class of {testimonial.graduationYear}</h6>
//                                     <p className="card-text testimonial-text">Feedback: {testimonial.testimonial}</p>
//                                     <p className="card-text"><small>{testimonial.degree} in {testimonial.major}</small></p>
//                                     <p className="card-text"><small>{testimonial.currentPosition} at {testimonial.company}</small></p>
//                                     <p className="card-text"><small>Contact: {testimonial.Contact}</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-12 text-center">
//                         <p>No testimonials available.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Testimonials;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        graduationYear: '',
        testimonial: '',
        degree: '',
        major: '',
        currentPosition: '',
        company: '',
        collegeName: '',
        Contact: '',
        photoUrl: ''
    });
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get('http://localhost:10000/api/testimonials');
            setTestimonials(response.data);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setError('Failed to fetch testimonials.'); // Set error message
        }
    };

    const handleChange = (e) => {
        setNewTestimonial({
            ...newTestimonial,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:10000/api/testimonials', newTestimonial);
            fetchTestimonials();
            setNewTestimonial({
                name: '',
                graduationYear: '',
                testimonial: '',
                degree: '',
                major: '',
                currentPosition: '',
                company: '',
                collegeName: '',
                Contact: '',
                photoUrl: ''
            });
            setError(null); // Clear error on successful submission
        } catch (error) {
            console.error('Error adding testimonial:', error);
            setError('Failed to submit testimonial.'); // Set error message
        }
    };

    return (
        <div className="testimonials-container">
            <div className="background-animation"></div>
            <h1 className="main-heading">Alumni Testimonials</h1>

            {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}

            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card testimonial-form">
                        <div className="card-body">
                            <h3 className="card-title">Submit Your Testimonial</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="text" className="form-control" name="name" placeholder="Your Name" value={newTestimonial.name} onChange={handleChange} required />
                                <input type="number" className="form-control" name="graduationYear" placeholder="Graduation Year" value={newTestimonial.graduationYear} onChange={handleChange} required />
                                <textarea className="form-control" name="testimonial" placeholder="Your Testimonial" value={newTestimonial.testimonial} onChange={handleChange} required rows="3"></textarea>
                                <input type="text" className="form-control" name="degree" placeholder="Degree" value={newTestimonial.degree} onChange={handleChange} required />
                                <input type="text" className="form-control" name="major" placeholder="Major" value={newTestimonial.major} onChange={handleChange} required />
                                <input type="text" className="form-control" name="currentPosition" placeholder="Current Position" value={newTestimonial.currentPosition} onChange={handleChange} required />
                                <input type="text" className="form-control" name="company" placeholder="Company" value={newTestimonial.company} onChange={handleChange} required />
                                <input type="text" className="form-control" name="collegeName" placeholder="College" value={newTestimonial.collegeName} onChange={handleChange} required />
                                <input type="tel" className="form-control" name="Contact" placeholder="Enter Contact Number" value={newTestimonial.Contact} onChange={handleChange} required />
                                <input type="text" className="form-control" name="photoUrl" placeholder="Photo URL (optional)" value={newTestimonial.photoUrl} onChange={handleChange} />
                                <button type="submit" className="btn submit-btn">Submit Testimonial</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="testimonials-heading">All Testimonials</h2>
            <div className="row testimonials-grid">
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="col-md-6 mb-4">
                            <div className="card testimonial-card">
                                {testimonial.photoUrl && (
                                    <img src={testimonial.photoUrl} className="card-img-top testimonial-image" alt={`${testimonial.name}'s photo`} />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title college-name">{testimonial.collegeName}</h5>
                                    <h6 className="card-subtitle mb-2">{testimonial.name} : Class of {testimonial.graduationYear}</h6>
                                    <p className="card-text testimonial-text">Feedback: {testimonial.testimonial}</p>
                                    <p className="card-text"><small>{testimonial.degree} in {testimonial.major}</small></p>
                                    <p className="card-text"><small>{testimonial.currentPosition} at {testimonial.company}</small></p>
                                    <p className="card-text"><small>Contact: {testimonial.Contact}</small></p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No testimonials available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials;

