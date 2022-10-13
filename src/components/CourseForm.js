import {Button, Form} from 'react-bootstrap'

const CourseForm = () => {
    var modal = document.getElementById("course-modal");
    const openFormModal = () => {
        modal.style.display = "block";
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log("submit form");
    }
    const closeForm = () => {
        modal.style.display = "none";
    }

    return (
        <div>
            <div id="course-modal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeForm}>&times;</span>
                    <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control type="input" placeholder="Enter course title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Course Meeting Time</Form.Label>
                            <Form.Control type="input" placeholder="Enter Course Meeting Time" />
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
            <Button id="myBtn" onClick={openFormModal}>Open Modal</Button>
        </div>
    )
    // <button id="myBtn">Open Modal</button>
}

export default CourseForm;