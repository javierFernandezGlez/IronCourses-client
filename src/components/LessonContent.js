import React from "react";

function LessonContent({setContent}) {
    return (
        <div className="form-group mt-3">
            <label>Content</label>
            <textarea
                name="content"
                onChange={(e) => setContent(e.target.value)}
                className="form-control mt-1"
                rows="5"
                cols="50"
            />
        </div>
    );
};

export default LessonContent;