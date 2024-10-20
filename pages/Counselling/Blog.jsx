import React from 'react';
import './Blog.css'; // Ensure you are importing your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Blog = () => {
    // Hardcoded YouTube channels with spot round guidance descriptions and statistics
    const channels = [
        {
            id: 1,
            name: 'Yash Aradhye',
            description: 'Guidance on selecting the right college during spot rounds, with insights into cutoffs and seat availability.',
            thumbnail: 'https://img.youtube.com/vi/qwyBCHpzk1I/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=qwyBCHpzk1I',
            likes: 1200,
            shares: 300,
        },
        {
            id: 2,
            name: 'TestprepKart',
            description: 'Strategic advice on how to approach spot rounds effectively and maximize your chances of securing a seat.',
            thumbnail: 'https://img.youtube.com/vi/Jy1cERF9CZ4/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=Jy1cERF9CZ4',
            likes: 800,
            shares: 150,
        },
        {
            id: 3,
            name: 'DINESH SIR Live Study',
            description: 'Live Q&A sessions focused on spot round processes, helping you navigate the admission maze successfully.',
            thumbnail: 'https://img.youtube.com/vi/ayUefkvl0vs/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=ayUefkvl0vs',
            likes: 500,
            shares: 100,
        },
        {
            id: 4,
            name: 'RG LECTURES',
            description: 'Insights into the latest updates on spot round notifications and how to prepare for them.',
            thumbnail: 'https://img.youtube.com/vi/skFCI2F4R8o/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=skFCI2F4R8o',
            likes: 950,
            shares: 200,
        },
        {
            id: 5,
            name: 'Vineet Sir',
            description: 'Expert guidance on important documents needed for spot rounds and tips on finalizing your college choice.',
            thumbnail: 'https://img.youtube.com/vi/qI5-qOqUhM4/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=qI5-qOqUhM4',
            likes: 1300,
            shares: 350,
        },
        {
            id: 6,
            name: 'GanitAnk',
            description: 'Tips and tricks for successful admissions during spot rounds, including real-time updates on seat availability.',
            thumbnail: 'https://img.youtube.com/vi/ZueXU8KfMiU/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=ZueXU8KfMiU',
            likes: 600,
            shares: 75,
        },
    ];

    return (
        <div className="blog-container">
            {/* Image after Navbar */}
            <div className="image-container">
                <img src="C:\Users\OMKAR\Downloads\wtcourseP\wtcourseP\src\utils\images\img2.jpeg.jpg" alt="Spot Round Guidance" className="after-navbar-image" />
            </div>

            <h2 className="text-center mb-4">Counselling Guidance</h2>

            <div className="channel-container row">
                {channels.length > 0 ? (
                    channels.map((channel) => (
                        <div key={channel.id} className="channel-card col-md-4 mb-4">
                            <img src={channel.thumbnail} alt={channel.name} className="channel-thumbnail" />
                            <h3 className="channel-name">{channel.name}</h3>
                            <p className="channel-description">{channel.description}</p>
                            <div className="video-stats">
                                <span className="likes"><strong>Likes:</strong> {channel.likes}</span>
                                <span className="shares"><strong>Shares:</strong> {channel.shares}</span>
                            </div>
                            <a href={channel.videoUrl} target="_blank" rel="noopener noreferrer" className="visit-button">
                                Visit YouTube Channel
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No channels available.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;