// src/App.js
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Courses';
import About from './pages/About/About';
import Counselling from './pages/Counselling/Blog';
import Contact from './pages/Contact/Contact';
import Colleges from './components/Colleges';
import CollegeDetail from './components/CollegeDetails';
import SpotRound from './components/SpotRound';
import SpotRoundDetails from './components/SpotRoundDetails';
import Testimonials from './components/Testimonials'; // Import the Testimonials component
import Footer from './Footer';
import Login from './pages/Login/Login'
// Import the new Footer component

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
  <Container>
    <Navbar.Brand>
      <span className='navbar-brand text-uppercase fw-bold'>CampusConnect</span> {/* Add the CampusConnect brand */}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'> {/* Add ms-auto to push the nav links to the right */}
        <Nav.Link as={Link} to='/' className='text-uppercase'>Home</Nav.Link>
        <Nav.Link as={Link} to='/cities' className='text-uppercase'>Cities</Nav.Link>
        <Nav.Link as={Link} to='/counselling' className='text-uppercase'>Counselling</Nav.Link>
        <Nav.Link as={Link} to='/spot-rounds' className='text-uppercase'>Spot Round</Nav.Link>
        <Nav.Link as={Link} to='/testimonials' className='text-uppercase'>Testimonials</Nav.Link>
        <Nav.Link as={Link} to='/about' className='text-uppercase'>About Us</Nav.Link>
        <Nav.Link as={Link} to='/contact' className='text-uppercase'>Get In Touch</Nav.Link>
        <Nav.Link as={Link} to='/login' className='text-uppercase'>Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

       

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/about' element={<About />} />
        <Route path='/counselling' element={<Counselling />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/college/details/:id' element={<CollegeDetail />} />
        <Route path='/spot-rounds' element={<SpotRound />} />
        <Route path='/spot-rounds/details/:collegeId' element={<SpotRoundDetails />} />
        <Route path='/testimonials' element={<Testimonials />} /> {/* Add route for Testimonials */}
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer /> {/* Add the new Footer component here */}
    </div>
  );
}

export default App;