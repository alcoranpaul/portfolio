
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setAdminUser } from './store/adminUser/adminUser.action';
import { onAuthStateChangeListener } from './utils/firebase/firebase.utils';

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


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        console.log(`setting admin user: ${user}`)
        dispatch(setAdminUser(user))
      }
      else {
        dispatch(setAdminUser(null))
      }
    })
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation location={location} />} key="navigation">
          <Route index element={<Home />} key="home" />
          <Route path='projects' element={<Projects />} key="projects" />
          <Route path='skills' element={<Skills />} key="skills" />
          <Route path='work' element={<Work />} key="work" />
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
