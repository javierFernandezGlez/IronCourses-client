import React from "react";

function CourseCategory({setCategory}) {
    return (
        <div className="form-group mt-3">
            <label>Category</label>
            <input
                name="name"
                onChange={(e) => setCategory(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    );
};

export default CourseCategory;