import { courseConflict } from "./util";
import CourseForm from "./CourseForm";

const Course = ({
    course,
    selected,
    isOpen,
    setSelected,
    setIsOpen,
    setCourse,
}) => {
    const isSelected = selected.includes(course);
    const hasConflict = (course, selected) => (
        selected.some(selection => courseConflict(course, selection))
      );
    const isDisabled = !isSelected && hasConflict(course, selected);
    const style = {
        backgroundColor: isDisabled? 'lightgrey' : isSelected ? 'lightblue' : 'white'
    };
    const toggleSelect = () => {
        if (selected.includes(course)) {
            setSelected(selected.filter(item => item !== course));
        }
        else {
            setSelected(courses => [...courses, course]);
        }
    }

    const clickFunction = (e) => {
        if (e.detail === 1) toggleSelect();
        if (e.detail === 2) {
            setIsOpen(true);
            setCourse(course);
        }
    }

    return (
            <>
                <div className="card m-1 p-2" style={style} onClick={(e) => isDisabled ? null : clickFunction(e)}>
                    <div className="card-body h-100">
                        <h2 className="class-title">{ course.term } CS { course.number }</h2>
                        <p className="card-text">{ course.title }</p>
                        <p className="card-text">{ course.meets }</p>
                    </div>
                </div>
            </>

    )
}

export default Course;