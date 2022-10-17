const CourseList = ({
    courses,
    term,
    selectedCourses,
    setSelectedCourses,
    auth,
}) => {
    let courseArr = Object.entries(courses).filter((course) => course[1].term === term);
    const handleClickCard = (e, course) => {
        if (e.target.parentNode.classList.contains("selected")) {
            e.target.parentNode.classList.remove("selected");
        } else {
            e.target.parentNode.classList.add("selected");
            setSelectedCourses(selectedCourses => [...selectedCourses, course]);
        }
        
    }
    return (
        <div className="row">
        {auth!=='' ? courseArr.map((course, idx) => {
            return (
                <div className="col-sm-3">
                    <div className="card h-100" key={idx} onClick={(e) => handleClickCard(e, course)}>
                        <div className="card-body">
                            <h2 className="class-title">{ course[1].term } CS { course[1].number }</h2>
                            <p className="card-text">{ course[1].title }</p>
                            <p className="card-text">{ course[1].meets }</p>
                        </div>
                    </div>
                </div>
                )
            })
            : "Please login before accessing courses."
        }
        </div>
    )
}
export default CourseList;