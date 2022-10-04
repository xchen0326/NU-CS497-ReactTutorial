import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';

function App() {
  const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [schedule, setSchedule] = useState();
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setSchedule(res);
      });
  }, [])
  // fetch(url)
  //   .then(res => res.json())
  //   .then((res) => {
  //     setSchedule(res);
  //   });
  // const schedule = {
  //   "title": "CS Course for 2018-2019",
  //   "courses": {
  //     "F101" : {
  //       "term": "Fall",
  //       "number": "101",
  //       "meets" : "MWF 11:00-11:50",
  //       "title" : "Computer Science: Concepts, Philosophy, and Connections"
  //     },
  //     "F110" : {
  //       "term": "Fall",
  //       "number": "110",
  //       "meets" : "MWF 10:00-10:50",
  //       "title" : "Intro Programming for non-majors"
  //     },
  //     "S313" : {
  //       "term": "Spring",
  //       "number": "313",
  //       "meets" : "TuTh 15:30-16:50",
  //       "title" : "Tangible Interaction Design and Learning"
  //     },
  //     "S314" : {
  //       "term": "Spring",
  //       "number": "314",
  //       "meets" : "TuTh 9:30-10:50",
  //       "title" : "Tech & Human Interaction"
  //     }
  //   }
  // };
  if (!schedule) return <h1>Loading...</h1>
  return (
    <div className="App">
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
    </div>
  );
}

export default App;
