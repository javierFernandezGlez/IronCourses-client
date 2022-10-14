import React, { useEffect } from "react";
import { useContext, useState } from 'react';
import { AuthContext } from "../contexts/auth.context";
import { useNavigate, useParams } from "react-router-dom";
import { post, get } from "../authService/authService";
import {Button} from "react-bootstrap";
import LessonContent from "../components/LessonContent";
import LessonTitle from "../components/LessonTitle";
import LessonResource from "../components/LessonResource";


const AddLesson = () => {
  const { authenticateUser, setIsLoading, setMessage } = 
useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [resource_url, setResourceUrl] = useState("");
  const [course, setCourse] = useState({});
  const navigate = useNavigate();
//   const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    const {id} = useParams();

    

    useEffect(() => {
      get(`/courses/${id}`)
          .then(result => {
            console.log(result.data);
            setCourse(result.data);
          })
          .catch(err => console.log(err))
    },[id])
    
  
    const checkError = (e) => {

        e.preventDefault();

        if (title.length === 0) {
            setMessage("The lesson must have a name");
            return;
        }
        if(content.length === 0) {
            setMessage("The lesson must have a name");
            return;
        }
        
        console.log({
            title: title,
            content: content,
        })
        post(`/courses/add-lesson/${id}`, {
            title: title,
            content: content,
            resource_url: resource_url
          })
            .then((results) => {
            //   localStorage.setItem("authToken", results.data.token);
            //   localStorage.setItem("id", results.data.id);
              setMessage(`${title} lesson created successfully!`);
              navigate("/created-courses");
            })
            .catch((err) => {
              setMessage(err.response.data.message);
              console.log("Something went wrong", err);
            })
            // .finally(() => {
            //   authenticateUser();
            // });
    };
    
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={checkError}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Add Lesson to {course.name} </h3>
                    <LessonTitle setTitle={setTitle} />
                    <LessonContent setContent={setContent} />
                    <LessonResource setResourceUrl={setResourceUrl} />
                    {/* <CoursePublished setPublished = {setPublished}/> */}
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" className="btn btn-dark">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
  );
};

export default AddLesson;