import React from "react";
import Card from "react-bootstrap/Card";
import "./Topic.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Topic = ({ topic }) => {
  const {id,logo, name } = topic;
  return (
    <div>
      <div className="col container">
        <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title">{name}</h5>
            <Link to={`./quiz/${id}`}>
            <button className="btn btn-primary">
                select Topics
                <FontAwesomeIcon icon={faArrowRight} />
                
            </button>
                    </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
