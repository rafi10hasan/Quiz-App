import React from 'react';
import './Option.css'

const Option = ({ option, correctChecker}) => {

    return (
        <div onClick={() => correctChecker(option)} className="eachOption">
        <small>{option}</small>
    </div>
    );
};

export default Option;