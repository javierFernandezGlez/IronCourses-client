import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Button, Card } from 'react-bootstrap';
// import { faPlay, faClock } from '@fortawesome/free-solid-svg-icons';

const CourseCard = (props) => {
    
    const {name, img, category, video, time, price} =props.course;
    
    return (
        <div>
            <Card  className="shadow-lg rounded card text-center">
              <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <p className="category">{category}</p>
                    <h2 className="course-title">{name}</h2>
                    <Row className="middle-row">
                        <Col sm={8}><Row className="extra">
                            <Col sm={6}>
                                <p className="video"><span>{video}</span></p>
                            </Col>
                            <Col sm={6}>
                                <p className="time"> <span>{time}</span></p>
                            </Col>
                        </Row></Col>
                        
                        <Col sm={4} className="price">
                        <p>{price}</p>
                        </Col>
                    </Row>
                    <Button className="enroll-btn btn-dark" onClick={() => props.handleAddCourse(props.course)} >Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;