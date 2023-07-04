/*
 * File: work.component.jsx
 * Project: portfolio
 * File Created: Sunday, 4th June 2023 10:35:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 4th July 2023 1:24:28 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { fetchWorksStart } from '../../store/works/works.action';
import { selectWorks } from '../../store/works/works.selector';

import WorkContent from '../../components/workContent/workContent.component';

const Work = () => {
    const dispatch = useDispatch();
    const works = useSelector(selectWorks);


    useEffect(() => {
        dispatch(fetchWorksStart())
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                padding: '20px 0px 20px 0px',

            }}>

            <WorkContent works={works} />
        </motion.div>



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
