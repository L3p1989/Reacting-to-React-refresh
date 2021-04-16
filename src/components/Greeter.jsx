import React from 'react';

const Greeter = props => {
    return (
        <div>
            <h2>{props.text}, {props.name}</h2>
        </div>
    );
};

export default Greeter;