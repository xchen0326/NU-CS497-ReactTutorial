import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CourseModal = ({selected}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                <Modal.Title>Your selected courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="row">
                {selected.map((course, idx) => {
                    return (
                        <div className="col-sm-3">
                            <div className="card h-100" key={idx}>
                                <div className="card-body">
                                    <h2 className="class-title">{ course.term } CS { course.number }</h2>
                                    <p className="card-text">{ course.title }</p>
                                    <p className="card-text">{ course.meets }</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CourseModal;