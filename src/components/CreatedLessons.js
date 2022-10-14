import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { get } from "../authService/authService";
import { useState, useEffect, useCallback } from 'react';
import { post } from "../authService/authService";
import { Link, useParams } from 'react-router-dom';

const CreatedLessons = () => {

    const [lessons, setLessons] = useState([]);
    const [course, setCourse] = useState({});

    const {id} = useParams();

    // const getLessons = () => {
    //     return get(`/courses/get-lessons/${id}`)
    //     // .then(result => {
    //     //     console.log("lessons: ", result)
    //     //     setLessons([...result]);
    //     // })
    //     // .catch(err => console.log(err))
    // }
    
    

    // const getCourse = () => {
    //     console.log('my id', id)
    //     return get(`/courses/${id}`)
    //     // .then(result => {
    //     //     // console.log(result.data)
    //     //     setCourse(result.data);
    //     // })
    //     // .catch(err => console.log(err))
    // }

    const getLessonsCallback = useCallback(() => {
        return get(`/courses/get-lessons/${id}`)
        // .then(result => {
        //     console.log("lessons: ", result)
        //     setLessons([...result]);
        // })
        // .catch(err => console.log(err))
    }, [id])

    const getCourseCallback = useCallback(() => {
        console.log('my id', id)
        return get(`/courses/${id}`)
        // .then(result => {
        //     // console.log(result.data)
        //     setCourse(result.data);
        // })
        // .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        console.log('useEffect hook runs')
        Promise.all([getCourseCallback(), getLessonsCallback()])
            .then(([courseResponse, lessonsResponse]) => {
                console.log(courseResponse.data, lessonsResponse.data)
                setCourse(courseResponse.data)
                setLessons(lessonsResponse.data)
            })
            .catch(err => console.log(err))
    }, [getCourseCallback, getLessonsCallback])
    
    

    // const deleteCourse = index => e => {
        
    //     post(`/courses/delete/${e.target.value}`)
    //         .then(result => {
    //             console.log(result);
    //             getCourses();
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        <div className='created'>
            <h1 className='title'>Lessons for <b><i>{course.name}</i></b></h1>
            {lessons.map((lesson, index) => {
                return (
                    <Card style={{ width: '50rem', margin: 'auto', marginBottom: '30px', marginTop: '30px' }}>
                        <Card.Body>
                            <Card.Title>{index + 1}. {lesson.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Card.Text><b>Content</b>: {lesson.content}</Card.Text>
                            <Card.Text><b>Resource URL</b>: {lesson.resource_url}</Card.Text>
                            
                            {/* {course.published ? 
                                <Card.Text style={{color:"green"}}>Published</Card.Text>:
                                <Card.Text style={{color: "red"}}>Not published</Card.Text>
                            } */}
                            {/* <div className="buttons">
                                <Link to={`/modify/${course._id}`} className='nav-links'>Modify</Link>
                                <Link to={`/add-lesson/${course._id}`} className="nav-links">Add Lesson</Link>
                                {course.published ? 
                                <Button className="btn-dark" value={course._id} onClick={updatePublished(index)}>Unpublish</Button>:
                                <Button className="btn-dark" value={course._id} onClick={updatePublished(index)}>Publish</Button>
                                }
                                <Button className="btn-dark" value={course._id} onClick={deleteCourse(index)}>Delete</Button>
                            </div> */}
                            <div className="buttons">
                                <Link to={`/modify/${course._id}`} className='nav-links'>Modify</Link>
                                
                                <Button className="btn-dark" value={course._id}>Delete</Button>
                            </div>
                        </Card.Body>
                        
                    </Card>
                );
            })}
            
        </div>
    )
}

export default CreatedLessons;







