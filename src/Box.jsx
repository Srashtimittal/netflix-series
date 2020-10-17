import React from "react";

function Box(props){
 return(
    <>
     <div className="main">
       <div className="card">
     <img src={props.imgsrc} alt="pic" className="cimg"/>
    <div className="info">
  <span className="category">
 {props.title}
  </span>
  <h3 className="title"> {props.sename} </h3>
  <a href = {props.link} target="_blank">
    <button> Watch Now </button>
  </a>
</div>
  </div>
</div>
     </>
 ); 
}
export default Box;