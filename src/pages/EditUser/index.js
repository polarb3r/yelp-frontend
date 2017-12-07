import React, { Component } from 'react';
import "./style.css";

class EditUser extends Component {
  render() {
    return (
      <div>
        <div className="editUserContainer">
          <ul>
            <li id="editUserHeader">Edit Account</li>
            <li className="editUserli">First Name</li>
            <input className="editUserInput" placeholder="if you don't want to change it leave it blank" />
            <li className="editUserli">Last Name</li>
            <input className="editUserInput" placeholder="if you don't want to change it leave it blank" />
            <li className="editUserli">Email</li>
            <input className="editUserInput" placeholder="insert a new email or leave blank in you dont want to change it" />
            <li className="editUserli">New password</li>
            <input className="editUserInput" placeholder="if you don't want to change it leave it blank" />
            <li className="editUserli">Confirm new password</li>
            <input className="editUserInput" placeholder="your new password again, if you changed it" />
            <li className="editUserli">Current password</li>
            <input className="editUserInput" placeholder="please type your current password to confirm changes" />
          </ul>
        </div>
        <div id="editUserButtonContainer">
          <button id="editUserSubmitButton" className="editUserButtons">Save my changes</button>
          <p id="editUserDeleteAccText">want to get rid of your account?</p>
          <button id="editUserDeleteAccButton" className="editUserButtons">Delete my account</button>
        </div>
      </div>
    );
  }
}

export default EditUser;
