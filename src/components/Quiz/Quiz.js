import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizdetails from "../Quizdetails/Quizdetails";
import './quiz.css'

const Quiz = () => {
  const quizes = useLoaderData();
  const {name, questions, total } = quizes.data;
  console.log(questions);
  return (
    
      <div className="quizSpeContainer">
        <h3 className="text-center">Quiz of {name}</h3>

        <div className="qAndA">
          {questions.map((quiz) => (
            <Quizdetails key={quiz.id} quiz={quiz}></Quizdetails>
          ))}
        </div>
      </div>
  
  );
};

export default Quiz;



