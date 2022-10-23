import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import BottomMenu from './components/BottomMenu.js';
import CourseModal from './components/CourseModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginLogout from './components/LoginLogout';
import { addScheduleTimes } from './components/util';
import { useData } from './database/firebase'

function App() {
  const url = "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php";
  const [auth, setAuth] = useState("");
  const [term, setTerm] = useState("Fall");
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(addScheduleTimes(json));
    }
    fetchSchedule();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setAuth("authenticated");
    } else {
      setAuth("");
    }
  }, [localStorage]);
  
  const [schedule, loading, error] = useData('/', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Banner title={schedule.title} />
            <CourseList courses={schedule.courses} term={term} selected={selected} setSelected={setSelected} auth={auth} />
            <CourseModal selected={selected} />
            <CourseForm />
          </div>} />
          <Route path="/authenticate" element={<LoginLogout setAuth={setAuth} />} />
      </Routes>
      {/* <BottomMenu /> */}
    </BrowserRouter>
  );
}

export default App;
