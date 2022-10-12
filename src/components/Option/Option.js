import React from 'react';
import './Option.css'

const Option = ({ option, correctChecker}) => {

    return (
        <div onClick={() => correctChecker(option)} className="eachOption">
      <p>{option}</p>
    </div>
    );
};

export default Option;