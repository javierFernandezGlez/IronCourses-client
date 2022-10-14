import React from "react";

function CourseDescription({setDescription, description}) {
    return (
        <div className="form-group mt-3">
            <label>Description</label>
            <textarea
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control mt-1"
                rows="5"
                cols="50"
                placeholder={description}
            />
        </div>
    );
};

export default CourseDescription;