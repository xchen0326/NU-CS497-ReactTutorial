import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import TermSelector from './components/TermSelector';

function App() {
  const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [schedule, setSchedule] = useState();
  const [term, setTerm] = useState("Fall");
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setSchedule(res);
      });
  }, []);

  if (!schedule) return <h1>Loading...</h1>
  return (
    <div className="App">
      <Banner title={schedule.title} />
      <TermSelector term={term} setTerm={setTerm} />
      <CourseList courses={schedule.courses} term={term} />
    </div>
  );
}

export default App;
