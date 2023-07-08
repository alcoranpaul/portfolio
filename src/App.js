
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.components';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Education from './routes/education/education.component';
import Skills from './routes/skills/skills.component';
import Work from './routes/work/work.component';
import Admin from './routes/admin/admin.component';

import ParticleBG from './components/particleBG/particleBG';
import { LocalStorageTitles } from './utils/server/notion.server';


function App() {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // event.preventDefault();
      // const confirmationMessage = 'Leaving this page will lose some persistent.';
      // event.returnValue = confirmationMessage;
      LocalStorageTitles.removeObjectsFromLocalStorage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation location={location} />} key="navigation">
          <Route index element={<Home />} key="home" />
          <Route path='projects/*' element={<Projects location={location} />} key="projects" />
          <Route path='skills' element={<Skills />} key="skills" />
          <Route path='work/*' element={<Work location={location} />} key="work" />
          <Route path='education' element={<Education />} key="education" />
          <Route path='contact' element={<Contact />} key="contact" />
          <Route path='about' element={<About />} key="about" />
          <Route path='admin' element={<Admin />} key="admin" />
        </Route>
      </Routes>
      <ParticleBG />
    </div>
  );
}

export default App;
