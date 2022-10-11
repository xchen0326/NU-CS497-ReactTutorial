import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import CourseModal from './components/CourseModal';
import TermSelector from './components/TermSelector';

function App() {
  const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [schedule, setSchedule] = useState();
  const [term, setTerm] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setSchedule(res);
      });
  }, []);

  useEffect(() => {
    console.log(selectedCourses);
  }, [selectedCourses])

  if (!schedule) return <h1>Loading...</h1>
  return (
    <div className="App">
      <Banner title={schedule.title} />
      <TermSelector term={term} setTerm={setTerm} />
      <CourseList courses={schedule.courses} term={term} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
      <CourseModal selectedCourses={selectedCourses} />
    </div>
  );
}

export default App;
