import React from "react";

function LessonTitle({setTitle}) {
    return (
        <div className="form-group mt-3">
            <label>Title</label>
            <input
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control mt-1" 
            />
        </div>
    );
};

export default LessonTitle;