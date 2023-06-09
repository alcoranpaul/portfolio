
import { Routes, Route } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.components';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Education from './routes/education/education.component';
import Skills from './routes/skills/skills.component';
import Work from './routes/work/work.component';

// const projectTemplate = {
//   project1: {
//     name: 'Project Name 1',
//     description: 'Project Description 1',
//     image: 'Project Image 1',
//   },
//   project2: {
//     name: 'Project Name 2',
//     description: 'Project Description 2',
//     image: 'Project Image 2',
//   },
// };

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/work' element={<Work />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
