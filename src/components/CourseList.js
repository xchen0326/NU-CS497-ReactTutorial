import Course from "./Course";
import TermSelector from './TermSelector'
import { useState } from "react";
import CourseForm from "./CourseForm";

const CourseList = ({
    courses,
    selected,
    setSelected,
    isOpen,
    setIsOpen,
    auth,
}) => {
    const [term, setTerm] = useState('Fall');
    const [course, setCourse] = useState();
    const termCourses = Object.values(courses).filter(course => term === course.term);
    return (
        <>
            <TermSelector term={term} setTerm={setTerm} />
            <div className="course-list">
            {auth!=='' ? termCourses.map((course, idx) => <Course key={idx}
                course={course}
                selected={selected}
                setSelected={setSelected}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setCourse={setCourse} />)
                : "Please login before accessing courses."
            }
            </div>
            <CourseForm isOpen={isOpen} setIsOpen={setIsOpen} course={course} />
        </>
    )
}
export default CourseList;