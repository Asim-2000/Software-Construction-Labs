import React from 'react';

const Validation = (props) => {

    let validationMessage = <p>Text Long Enough!</p>;

    if (props.length <= 5) {
        validationMessage=<p>Text too Short!</p>;
    }

    return (
        <div>
            {validationMessage}
        </div>
    )

    
}

export default Validation;