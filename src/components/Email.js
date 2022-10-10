import React from "react";

function Email({setEmail}) {
    return (
        <div className="form-group mt-3">
            <label>Email</label>
            <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    )
}

export default Email;