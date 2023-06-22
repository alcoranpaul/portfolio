
import { Routes, Route, useLocation } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.components';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Education from './routes/education/education.component';
import Skills from './routes/skills/skills.component';
import Work from './routes/work/work.component';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='skills' element={<Skills />} />
          <Route path='work' element={<Work />} />
          <Route path='education' element={<Education />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
