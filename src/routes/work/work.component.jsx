/*
 * File: work.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 7th July 2023 6:35:05 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchWorksStart } from '../../store/works/works.action';
import { selectWorks } from '../../store/works/works.selector';

import WorkContent from '../../components/workContent/workContent.component';
import WorksPage from '../../components/worksPage/worksPage.component';

const Work = () => {
    const dispatch = useDispatch();
    const works = useSelector(selectWorks);


    useEffect(() => {
        dispatch(fetchWorksStart())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (

        <Routes>
            <Route index element={<WorkContent works={works} />} key="worksContent" />
            <Route path=":workID" element={<WorksPage works={works} />} key="workPage" />
        </Routes>



    );
};

export default Work;



//For ScrollTo

// import './styles.css';

// const WorkExperiencePage = () => {
//   const handleScrollToWork = () => {
//     document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleScrollToOtherWork = () => {
//     document.getElementById('other-work').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="page">
//       <section id="work" className="section">
//         <h2>Work</h2>
//         {/* Add work experience content here */}
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </section>

//       <section id="other-work" className="section">
//         <h2>Other Work</h2>
//         {/* Add content for other work here */}
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </section>

//       <div className="scroll-buttons">
//         <button onClick={handleScrollToWork}>Scroll to Work</button>
//         <button onClick={handleScrollToOtherWork}>Scroll to Other Work</button>
//       </div>
//     </div>
//   );
// };

// export default WorkExperiencePage;
