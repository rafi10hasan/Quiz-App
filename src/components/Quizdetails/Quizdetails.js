import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quizdetails.css'

const Quizdetails = ({quiz}) => {
    const {options, question, correctAnswer } = quiz;
    const notify = (correct) => toast('Correct Answer is =>> '+correct);
  
  
    const correctChecker = (selectedOption) =>{
      if(correctAnswer === selectedOption){
        const notify = () => toast("the answer is correct!")
        
        notify();
  
      }
      
      else{
        const notify = () => toast("Wrong Answer !")
        notify();
      }
    }
   
    return (
        <div className="question">
          
        <button onClick={()=>notify(correctAnswer)}>
        <FontAwesomeIcon className="eyeIcon" icon={faEyeLowVision}></FontAwesomeIcon>
        </button>
     
            <p className="each-question">Question: {question}</p>
             <div className='options-container'>
             {options.map((option) => (
                    <Option 
                    key={option.id} 
                    option={option}
                    correctChecker={correctChecker}>
                    
                    </Option>
        ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quizdetails;