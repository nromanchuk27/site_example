import React from "react";
import { contactAddresses, contactBtns } from "../data/dataArrey";

export const Contact = () => {
  return (
    <div className="contacts">
      <div className="contacts_form">
        <div className="contacts_form_contacts">
          {contactAddresses.map(item => (
            <p key={item.id} className="adress">
              {item.text}
            </p>
          ))}
        </div>
        <div className="contacts_form_btns">
          {contactBtns.map(item => (
            <button key={item.id} className="btn" id={item.id}>
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
