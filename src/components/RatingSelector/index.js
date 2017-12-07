import React, { Component } from 'react';
import "./style.css";

class RatingSelector extends Component {

  changeClassName = (e) =>{
    if( e.target.className === "fa fa-star checked" ){
      let noCheck = document.querySelectorAll(".checked");
      for(let i = 0; i < noCheck.length; i++){
        noCheck[i].className = "fa fa-star not-checked";
      }
    } else if ( e.target.className === "fa fa-star not-checked" ){
      let allNoCheck = document.querySelectorAll(".checked");
      for(let i = 0; i < allNoCheck.length; i++){
        allNoCheck[i].className = "fa fa-star not-checked";
      }
      e.target.className = "fa fa-star checked";
      let check = document.querySelectorAll(".fa");
      for(let i = 0; i < check.length ; i++){
        if(check[i].className !== "fa fa-star checked"){
          check[i].className = "fa fa-star checked";
        } else {
          break;
        }
      }
    }
  }

  render() {
    return (
      <div id="ratingButtons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <span onClick={(e)=>this.changeClassName(e)} className="fa fa-star not-checked"></span>
        <span onClick={(e)=>this.changeClassName(e)} className="fa fa-star not-checked"></span>
        <span onClick={(e)=>this.changeClassName(e)} className="fa fa-star not-checked"></span>
        <span onClick={(e)=>this.changeClassName(e)} className="fa fa-star not-checked"></span>
        <span onClick={(e)=>this.changeClassName(e)} className="fa fa-star not-checked"></span>
      </div>
    );
  }
}

export default RatingSelector;
