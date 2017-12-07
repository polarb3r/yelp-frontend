import React, { Component } from 'react';
import "./style.css";

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <div className="signUpContainer">
          <ul>
            <li id="signUpHeader">Sign up</li>
            <li className="signUpli">First Name</li>
            <input className="signUpInput1 signUpAllInput" placeholder="name or nickname" />
            <li className="signUpli">Last Name</li>
            <input className="signUpInput2 signUpAllInput" placeholder="the one from your parents or marriage" />
            <li className="signUpli">Email</li>
            <input className="signUpEmailInput signUpAllInput" placeholder="not the embarassing one from highschool" />
            <li className="signUpli">Password</li>
            <input className="signUpInput1 signUpAllInput" placeholder="go for something other than 'password'" />
            <li className="signUpli">Confirm</li>
            <input className="signUpInput2 signUpAllInput" placeholder="your password again" />
          </ul>
        </div>
        <div id="signUpButtonContainer">
          <button id="signUpPageButton" className="signUpButtons">Sign Up</button>
          <p id="signUpPageSignInButtonText">already have an account?</p>
          <button id="signUpPageSignInButton" className="signUpButtons">Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
