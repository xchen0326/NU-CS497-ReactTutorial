import { courseConflict } from "./util";
import { Button } from "react-bootstrap";

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

    const clickSelect = () => {
        toggleSelect();
    }

    const clickEdit = () => {
        if (localStorage.getItem("userId") !== "s31sPmB2OUQnm92y3jhFJloeNIF2") {
            return;
        }
        setIsOpen(true);
        setCourse(course);
    }

    return (
            <>
                <div className="card m-1 p-2" style={style} onClick={() => isDisabled ? null : clickSelect}>
                    <div className="card-body h-100">
                        <h2 className="class-title">{ course.term } CS { course.number }</h2>
                        <p className="card-text">{ course.title }</p>
                        <p className="card-text">{ course.meets }</p>
                    </div>
                    {localStorage.getItem("userId") === "s31sPmB2OUQnm92y3jhFJloeNIF2" ? <Button onClick={clickEdit}> Edit Course</Button> : ""}
                </div>
            </>

    )
}

export default Course;