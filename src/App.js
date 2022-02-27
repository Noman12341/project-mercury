import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navbar, Footer } from './components';
import { Home, AboutUs, OurValues } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/our-values' element={<OurValues />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
