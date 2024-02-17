
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Componants/Navigation.jsx';
import Header from './Componants/Header.jsx';
import About from './Componants/About.jsx';
import Contact from './Componants/Contact.jsx';
import Skills from './Componants/Skills.jsx';
import NoPage from './Componants/NoPage.jsx';
import Education from './Componants/Education.jsx';
import Projects from './Componants/Projects.jsx';
import Footer from './Componants/Footer.jsx';
import Hobbies from './Componants/Hobbies.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      {
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='skills' element={<Skills />} />
             <Route path='education' element={<Education/>}/>
             <Route path='projects' element = {<Projects/>}/>
             <Route path='hobbies' element = {<Hobbies/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      }
      <Footer/>
    </div>
  );
}

export default App;
