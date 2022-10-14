import React from "react";

function LessonResource({setResourceUrl}) {
    return (
        <div className="form-group mt-3">
            <label>Resource Url</label>
            <input
                name="resource"
                onChange={(e) => setResourceUrl(e.target.value)}
                className="form-control mt-1" 
            />
        </div>
    );
};

export default LessonResource;