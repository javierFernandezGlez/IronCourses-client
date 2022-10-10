import React from "react";

function ConfirmPassword({setConfirmPassword}) {
    return (
        <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control mt-1"
            />
        </div>
    );
};

export default ConfirmPassword;