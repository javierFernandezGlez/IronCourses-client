import React from "react";

function Password({setPassword}) {
    return (
        <div className="form-group mt-3">
            <label>Password</label>
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    );
};

export default Password;