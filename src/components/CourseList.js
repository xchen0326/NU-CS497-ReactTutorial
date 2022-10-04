const CourseList = ({ courses }) => {
    let courseArr = Object.entries(courses);
    return (
        // <div>
        //     {courseArr.map((course) => {
        //         return <div>
        //             {course[1].term}
        //         </div>
        //     })}
        // </div>
        <div className="row">
        {courseArr.map((course, idx) => {
            return (
                <div className="col-sm-3">
                <div className="card h-100" key={idx}>
                    <div className="card-body">
                    <h2 className="class-title">{ course[1].term } CS { course[1].number }</h2>
                    <p className="card-text">{ course[1].title }</p>
                    <p className="card-text">{ course[1].meets }</p>
                    </div>
                </div>
                </div>
                )
            })
        }
        </div>
    )
}
export default CourseList;