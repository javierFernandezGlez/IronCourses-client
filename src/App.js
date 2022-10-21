import "./App.css";
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth.context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import DeleteUser from "./pages/DeleteUser";
import Header from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseForm from "./pages/CourseForm";
import SideBar from "./components/SideBar";
import Introduction from "./pages/Introduction";
import Insertion from "./pages/Insertion";
import Bubble from "./pages/Bubble";
import MergeSort from "./pages/MergeSort";
import SortingVisualizer from "./pages/SortingVisualizer";
import MergeVisualizer from "./pages/MergeVisualizer";
import QuickVisualizer from "./pages/QuickVisualizer";
import CreatedCourses from "./components/CreatedCourses";
import Modify from "./pages/Modify";
import AddLesson from "./pages/AddLesson";
import CreatedLessons from "./components/CreatedLessons";
import InsertionVisualizer from "./pages/InsertionVisualizer";
import BubbleVisualizer from "./pages/BubbleVisualizer";
import QuickSort from "./pages/QuickSort";
import HeapSort from "./pages/HeapSort";
import Selection from "./pages/Selection";
import SelectionVisualizer from "./pages/SelectionVisualizer";

const App = () => {
  const { isLoading, message } = useContext(AuthContext)
  let token = localStorage.getItem("authToken");
  const LoggedIn = () => {
    return token ? <Outlet /> : <Navigate to="/" />;
  };
  const NotLoggedIn = () => {
    return !token ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<LoggedIn />}>
          <Route path="/create-course" element={<CourseForm/>} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/introduction" element={<Introduction/>} />
          <Route path="/insertion" element={<Insertion/>} />
          <Route path="/bubble" element={<Bubble/>} />
          <Route path="/mergesort" element={<MergeSort/>} />
          <Route path="/quicksort" element={<QuickSort/>}/>
          <Route path="/selection" element={<Selection/>}/>
          <Route path="/heapsort" element={<HeapSort/>}/>
          <Route path="/insertion-visualizer" element={<InsertionVisualizer/>}/>
          <Route path="/bubble-visualizer" element={<BubbleVisualizer/>}/>
          <Route path="/merge-visualizer" element={<MergeVisualizer/>}/>
          <Route path="/quick-visualizer" element={<QuickVisualizer/>}/>
          <Route path="/selection-visualizer" element={<SelectionVisualizer/>}/>
          <Route path="/created-courses" element={<CreatedCourses/>}/>
          <Route path="/modify/:id" element={<Modify/>}/>
          <Route path="/add-lesson/:id" element={<AddLesson/>}/>
          <Route path="/get-lessons/:id" element={<CreatedLessons/>}/>
        </Route>
        <Route element={<NotLoggedIn />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      {message && <p>{message}</p>}
      {isLoading && <p>Loading...</p>}
      
    </div>
  );
};

export default App;
