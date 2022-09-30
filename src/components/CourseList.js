const CourseList = ({ courses }) => {
    let courseArr = Object.entries(courses);
    return (
        courseArr.map((course, idx) => {
            return (
                <div key={idx}>
                    <p>{ course[1].term } CS { course[1].number }: { course[1].title }</p>
                </div>
            )
        })
    )
}
export default CourseList;