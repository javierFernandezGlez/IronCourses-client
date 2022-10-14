import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { get } from "../authService/authService";
import { useState, useEffect } from 'react';
import { post } from "../authService/authService";
import { Link } from 'react-router-dom';

const CreatedCourses = () => {

    const [courses, setCourses] = useState([]);

    const getCourses = () => {
        get("/courses/by")
        .then(result => {
            console.log(result)
            setCourses([...result.data]);
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getCourses();
    }, []);
    
    const updatePublished = index => e => {
        const course = courses[index];
        console.log(course);
        if(course.published) {
            post(`/courses/unpublish/${e.target.value}`)
                .then(result => {
                    console.log(result);
                    getCourses();
                })
                .catch(err => console.log(err))
        }
        else {
            post(`/courses/publish/${e.target.value}`)
                .then(result => {
                    console.log(result);
                    getCourses();
                })
                .catch(err => console.log(err))
        }
        console.log(e.target.value, courses[index]);
    }

    const deleteCourse = index => e => {
        
        post(`/courses/delete/${e.target.value}`)
            .then(result => {
                console.log(result);
                getCourses();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='created'>
            <h1 className='title'>Your courses</h1>
            {courses.map((course, index) => {
                return (
                    <Card style={{ width: '50rem', margin: 'auto', marginBottom: '30px', marginTop: '30px' }}>
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{course.category}</Card.Subtitle>
                            <Card.Text>{course.description}</Card.Text>
                            
                            {course.published ? 
                                <Card.Text style={{color:"green"}}>Published</Card.Text>:
                                <Card.Text style={{color: "red"}}>Not published</Card.Text>
                            }
                            <div className="buttons">
                                <Link to={`/modify/${course._id}`} className='nav-links'>Modify</Link>
                                <Link to={`/get-lessons/${course._id}`} className="nav-links">See Lessons</Link>
                                {course.published ? 
                                <Button className="btn-dark" value={course._id} onClick={updatePublished(index)}>Unpublish</Button>:
                                <Button className="btn-dark" value={course._id} onClick={updatePublished(index)}>Publish</Button>
                                }
                                <Button className="btn-dark" value={course._id} onClick={deleteCourse(index)}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                );
            })}
            
        </div>
    )
}

export default CreatedCourses;







// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';

// function NavTabsExample() {
//   return (
    
//     // <Card>
//     //   <Card.Header>
//     //     <Nav variant="tabs" defaultActiveKey="#first">
//     //       <Nav.Item>
//     //         <Nav.Link href="#first">Active</Nav.Link>
//     //       </Nav.Item>
//     //       <Nav.Item>
//     //         <Nav.Link href="#link">Link</Nav.Link>
//     //       </Nav.Item>
//     //       <Nav.Item>
//     //         <Nav.Link href="#disabled" disabled>
//     //           Disabled
//     //         </Nav.Link>
//     //       </Nav.Item>
//     //     </Nav>
//     //   </Card.Header>
//     //   <Card.Body>
//     //     <Card.Title>Special title treatment</Card.Title>
//     //     <Card.Text>
//     //       With supporting text below as a natural lead-in to additional content.
//     //     </Card.Text>
//     //     <Button variant="primary">Go somewhere</Button>
//     //   </Card.Body>
//     // </Card>
//   );
// }

// export default NavTabsExample;