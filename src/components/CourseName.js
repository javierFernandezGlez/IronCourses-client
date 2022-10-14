import React from "react";

function CourseName({setName, name}) {
    return (
        <div className="form-group mt-3">
            <label>Name</label>
            <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-1"
                placeholder={name}
            />
        </div>
    );
};

export default CourseName;