import React, { Component } from 'react';
import "./style.css";

class ContactPageText extends Component {
  render() {
    return (
      <div className="contactContainer">
        <ul>
          <li id="contactHeader">Contact</li>
          <li>Have you got questions for us regarding your next <b>F</b>ull <b>E</b>nglish <b>B</b>reakfast?</li>
          <div id="contactInputNameMail">
            <input className="contactAllInput" placeholder="name" />
            <input className="contactAllInput" placeholder="email" />
          </div>
          <textarea id="contactTextInput" placeholder="let us know what you have to say" />
          <button id="contactButton">Send</button>
        </ul>
      </div>
    );
  }
}


export default ContactPageText;
