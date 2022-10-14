import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import CourseName from "../components/CourseName";
import CourseDescription from "../components/CourseDescription";
import CourseCategory from "../components/CourseCategory";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { post } from "../authService/authService";
import { get } from "../authService/authService";

function Modify() {
    const {id} = useParams();

    const { authenticateUser, setIsLoading, setMessage } = 
useContext(AuthContext)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState({});
  const navigate = useNavigate();
//   const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    
    const getCourse = () => {
        get(`/courses/${id}`)
            .then(result => {
                console.log(result);
                setCourse(result.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCourse();
    }, []);

    
  
    const checkError = (e) => {

        e.preventDefault();

        if (name.length === 0) {
            setMessage("The course must have a name");
            return;
        }
        if(category.length === 0) {
            setMessage("The course must have a name");
            return;
        }
        if(description.length === 0) {
            setMessage("The course must have a name");
            return;
        }
        console.log({
            name: name,
            description: description,
            category: category
        })
        post(`/courses/modify/${id}`, {
            name: name,
            description: description,
            category: category
          })
            .then((results) => {
            //   localStorage.setItem("authToken", results.data.token);
            //   localStorage.setItem("id", results.data.id);
              setMessage(`${name} course modified successfully!`);
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
                    <h3 className="Auth-form-title">Modify <i>{course.name}</i></h3>
                    <CourseName setName={setName} name={course.name}/>
                    <CourseDescription setDescription={setDescription} description={course.description} />
                    <CourseCategory setCategory={setCategory} category={course.category} />
                    {/* <CoursePublished setPublished = {setPublished}/> */}
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" className="btn btn-dark">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
  );
}
export default Modify;