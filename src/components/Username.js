import React from "react";

function Username({setUsername}) {
    return (
        <div className="form-group mt-3">
            <label>Username</label>
            <input
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    );
};

export default Username;