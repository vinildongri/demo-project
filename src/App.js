import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Header from "./components/layouts/Header";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import CategoryPage from './components/pages/CategoryPage';
import Contact from "./components/pages/Contact";
// import Footer from "./components/layouts/Footer";


// We create a mini-component for the Home Page layout
const HomePage = () => (
  <>
    {/* <Header /> */}
    <Hero />
    <About />
    <Gallery />
    <Contact />
    {/* <Footer /> */}
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* If the URL is '/' show the Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* If the URL is '/gallery/something' show the new standalone page */}
          <Route path="/gallery/:id" element={<CategoryPage />} />

          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;