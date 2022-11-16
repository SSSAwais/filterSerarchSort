import React from "react";
import './style.css';

const Abs_component = (props) => {
  const { name, fatherName, age, Qualification, profession, maleImage ,status} = props;
  return (
    <>
      <div className="wrapper">
        <img src={maleImage} alt="iamghe" className="img-fluid iamgedss" />
        <h2 className="name_heading">Name: {name}</h2>
        <h3 className="father">Father's Name: {fatherName}</h3>
        <p className="age">Age: {age}</p>
        <p className="age">Qualification: {Qualification}</p>
        <h5 className="profession">Profession: {profession}</h5>
        <h6>{status}</h6>
      </div>
    </>
  );
};

export default Abs_component;
