import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseModal from './components/CourseModal';
import TermSelector from './components/TermSelector';
import BottomMenu from './components/BottomMenu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginLogout from './components/LoginLogout';

function App() {
  const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [auth, setAuth] = useState("");
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

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setAuth("authenticated");
    } else {
      setAuth("");
    }
  }, [localStorage]);
  
  if (!schedule) return <h1>Loading...</h1>
  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Banner title={schedule.title} />
            <TermSelector term={term} setTerm={setTerm} />
            <CourseList courses={schedule.courses} term={term} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} auth={auth} />
            <CourseModal selectedCourses={selectedCourses} />
            <CourseForm />
          </div>} />
          <Route path="/authenticate" element={<LoginLogout setAuth={setAuth} />} />
      </Routes>
      <BottomMenu />
    </BrowserRouter>
  );
}

export default App;
