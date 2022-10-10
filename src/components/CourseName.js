import React from "react";

function CourseName({setName}) {
    return (
        <div className="form-group mt-3">
            <label>Name</label>
            <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    );
};

export default CourseName;