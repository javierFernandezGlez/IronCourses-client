import React from 'react';
import {Link} from "react-router-dom";
import { Col, Row, Button, Card } from 'react-bootstrap';
// import { faPlay, faClock } from '@fortawesome/free-solid-svg-icons';

const CourseCard = (props) => {
    
    const {name, img, category, instructor} =props.course;
    
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
                                <p className="video"><span>{instructor}</span></p>
                            </Col>
                            
                        </Row></Col>
                        
                        
                    </Row>
                    <Link className="nav-links" to="/introduction" >Enroll Now</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;