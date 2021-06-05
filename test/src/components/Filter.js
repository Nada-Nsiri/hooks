import React from "react";

const Filter = ({ changeInput }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="search movie"
                size="80"
                onChange={(e) => changeInput(e.target.value)}
            />
            <br></br>
        </div>
    );
};

export default Filter;
