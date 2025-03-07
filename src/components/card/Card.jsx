import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <div className="card-info">
                <h1 className="name">{props.name}</h1>
                <h4 className="age">Age: {props.age}</h4>
                <p className="course-type">Course Type: {props.courseType}</p>
                <p className="attendance">
                    T&A : {props.attendance === "100%" ? 'Full Success' : props.attendance}
                </p>
                <p className="scholarship" style={{ color: props.scholarship ? 'green' : 'red' }}>
                    {props.scholarship ? 'With Scholarship' : 'Without Scholarship'}
                </p>

            </div>
        </div>
    )
}

export default Card