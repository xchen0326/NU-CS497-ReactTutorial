import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { updateData } from '../database/firebase';

const CourseForm = ({
    isOpen,
    setIsOpen,
    course,
}) => {
    const [titleState, setTitleState] = useState('');
    const [meetingTitle, setMeetingTitle] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    var modal = document.getElementById("course-modal");

    useEffect(() => {
        if (isOpen) {
            modal.style.display = "block";
        }
    }, [isOpen])
    const submitForm = (e) => {
        e.preventDefault();
        if (meetingTitle.length < 2) {
            setTitleState("The course title should have a length larger than 2.");
        } else {
            let courseId = course.term[0] + course.number;
            updateData(`/courses/${courseId}/meets`, "hello");
            setTitleState("");
        }
    }
    const closeForm = () => {
        setMeetingTitle("");
        setTitleState("");
        document.getElementById("meetingTitle").value = '';
        modal.style.display = "none";
        setIsOpen(false);
    }

    return (
        <div>
            <div id="course-modal" className="modal">
                <div className="modal-content" style={{width: "50%"}}>
                    <span className="close" onClick={closeForm}>&times;</span>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control id='meetingTitle' type="input" placeholder="Enter course title" onChange={
                                (e) => setMeetingTitle(e.target.value)
                            } />
                            <span style={{color: "red"}}>{titleState}</span>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Course Meeting Time</Form.Label>
                            <Form.Control type="input" placeholder="Enter Course Meeting Time" onChange={
                                (e) => setMeetingTime(e.target.value)
                            } />
                        </Form.Group>
                        <Button variant="primary" onClick={closeForm}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CourseForm;