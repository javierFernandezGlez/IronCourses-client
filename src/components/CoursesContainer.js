import React from 'react';
// import data from '../../courseData/courseData'
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CourseCard from './CourseCard';

const CoursesContainer = () => {

    // const [course, setCourse] = useState(data);
    // const [cart, setCart] = useState([]);
    // const handleAddCourse = (course) =>{
    //     const newCart = [...cart, course];
    //     setCart(newCart);
    // }
    const sorting = {
        name: "Sorting Algorithms",
        img: "https://i0.wp.com/www.broyhillasset.com/wp-content/uploads/2016/12/sorting-toy-royalty-free-stock-photos-image-231188-WeCXzj-clipart.jpg?ssl=1",
        category: "Computer Science",
        instructor: "Jack Fischer"
    };
    
    return (
        <div>
            <Container fluid>
                <Row>
                    
                    <Col className="courses">
                        <Container>
                            <Row className="title">
                            <Col><h1>All courses</h1></Col>  
                            </Row>
                            
                            <Row>
                                <Col sm={12} md={12} xl={6}>
                                        <CourseCard course={sorting}></CourseCard> 
                                    </Col>
                                    <Col sm={12} md={12} xl={6}>
                                        <CourseCard course={sorting}></CourseCard> 
                                    </Col>
                                    <Col sm={12} md={12} xl={6}>
                                        <CourseCard course={sorting}></CourseCard> 
                                    </Col>
                                
                                {/* {course.map(course =>
                                    <Col sm={12} md={12} xl={6}>
                                        <CourseCard handleAddCourse={handleAddCourse} course={course}></CourseCard>
                                    </Col>
                                  )
                                } */}
                            </Row>
                            
                        </Container>
                    </Col>
                    
                    
                    
                </Row>
            </Container>
        </div>
    );
};

export default CoursesContainer;